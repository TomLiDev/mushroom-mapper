from django.shortcuts import render, get_object_or_404, reverse
from django.views import generic, View
from django.http import HttpResponseRedirect
from .models import Find
from .forms import CommentForm, FindForm
from django.utils.text import slugify
from django.contrib import messages


class FindList(generic.ListView):
    """
    This is the class based function to display the homepage and overall
    collection of finds.
    """
    model = Find
    queryset = Find.objects.filter(status=1).order_by('-created_on')
    template_name = 'index.html'
    paginate_by = 6


class FindDetail(View):
    """
    This is class with functions to get and display the detail of a find from
    the homepage. The post function allows the creation and posting of comments. 
    """

    def get(self, request, slug, *args, **kwargs):
        find = get_object_or_404(Find, slug=slug)
        comments = find.comments.filter(approved=True).order_by('created_on')
        liked = False
        if find.likes.filter(id=self.request.user.id).exists():
            liked = True

        return render(
            request,
            "find_detail.html",
            {
                "find": find,
                "comments": comments,
                "commented": False,
                "liked": liked,
                "comment_form": CommentForm()
            },
        )

    def post(self, request, slug, *args, **kwargs):
        queryset = Find.objects.filter(status=1)
        find = get_object_or_404(queryset, slug=slug)
        comments = find.comments.filter(approved=True).order_by('created_on')
        liked = False
        if find.likes.filter(id=self.request.user.id).exists():
            liked = True

        comment_form = CommentForm(data=request.POST)

        if comment_form.is_valid():
            comment_form.instance.email = request.user.email
            comment_form.instance.name = request.user.username
            comment = comment_form.save(commit=False)
            comment.find = find
            comment.save()
        else:
            comment_form = CommentForm()

        return render(
            request,
            "find_detail.html",
            {
                "find": find,
                "comments": comments,
                "commented": True,
                "liked": liked,
                "comment_form": CommentForm()
            },
        )


class FindLike(View):
    """
    This class contains the function to find likes, if they exist on a find.
    """

    def find(self, request, slug, *args, **kwargs):
        find = get_object_or_404(Find, slug=slug)

        if find.likes.filter(id=request.user.id).exists():
            find.likes.remove(request.user)
        else:
            find.likes.add(request.user)

        return HttpResponseRedirect(reverse('find_detail', args=[slug]))


class CreateFind(View):
    """
    This is the class with function to get and display the create find page for
    a user to then create their own finds.
    """

    def get(self, request):

        return render(
            request,
            "create_find.html",
            {
                "find_form": FindForm()
            },
        )

    def post(self, request):

        find_form = FindForm(data=request.POST)

        if find_form.is_valid():
            find_form.instance.slug = slugify(find_form.instance.title)
            find = find_form.save()
            find.slug = slugify(find.title)
            edittext = "edit"
            deletetext = "delete"
            find.edit_slug = (find.slug + edittext)
            find.delete_slug = (find.slug + deletetext)
            print("edit slug test", find.edit_slug)
            print("delete slug test", find.delete_slug)

            find.save()

        else:
            print("ERROR with saving form")
            
        return render(
            request,
            "create_find.html",
            {
                "find_form": FindForm()
            },
        )

class ViewAccount(generic.ListView):
    """
    This is the view which allows a user to view their accound and posts they have previously made
    """
    model = Find
    template_name = 'view_account.html'
    paginate_by = 2


class ViewFinds(generic.ListView):
    """
    This is the view which allows a user to view their previously created finds so they can edit/remove
    as desired
    """

    def get(self, request):

        queryset = Find.objects.filter(author=request.user)

        return render(
            request,
            "view_finds.html",
            {
                "user_finds":queryset
            },
        )
    
    
class EditFind(View):
    """
    This is the view which allows a user to access a Find they have previously created to edit the
    details as they wish. 
    """

    def get(self, request, slug):
        print("Edit find get entered")

        find = get_object_or_404(Find, slug=slug)
        print("Cleand fields test", find.clean_fields)
        data = find.clean_fields
        print("data test", data)

        return render(
        request,
            "create_find.html",
            {
                "find_form": FindForm(instance=find), 'slug': slug
            },
        )
    
    def post(self, request, slug):
        print("Edit find post entered")
        find = get_object_or_404(Find, slug=slug)
        queryset = Find.objects.filter(author=request.user)

        find_form = FindForm(data=request.POST, instance=find)

        if find_form.is_valid():
            find_form.instance.slug = slugify(find_form.instance.title)
            find = find_form.save()
            find.slug = slugify(find.title)

            print("slug test", find.slug)

            find.save()

            return render(
            request,
            "view_finds.html",
            {
                "user_finds":queryset
            },
        )


class DeleteFind(View):
    """
    This is the view which allows a user to delete one of their previous finds
    """

    def get(self, request, slug):
        print("Delete find entered")
        find = get_object_or_404(Find, slug=slug)
        queryset = Find.objects.filter(author=request.user)

        find.delete()
        print("Deleted")

        return render(
            request,
            "view_finds.html",
            {
                "user_finds":queryset
            },
        )