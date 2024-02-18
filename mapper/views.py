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
    the homepage. The post function allows the creation and posting of
    comments."""

    def get(self, request, slug):
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

    def post(self, request, slug):
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

    def post(self, request, slug):
        find = get_object_or_404(Find, slug=slug)

        if find.likes.filter(id=request.user.id).exists():
            find.likes.remove(request.user)
        else:
            find.likes.add(request.user)

        return HttpResponseRedirect(reverse('find_detail', args=[slug]))


class CreateFind(View):
    """
    This is the class to get and display the create find page
    for a user to then create their own finds.
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

        find_form = FindForm(request.POST, request.FILES,
                             initial={'author': request.user})

        if find_form.is_valid():
            find_form.save()
            find_form.instance.slug = slugify(find_form.instance.title)
            find = find_form.save()
            find.slug = slugify(find.title)
            find.author = request.user

            find.save()
            messages.success(
                request,
                """Find successfully created. Please wait for approval
                before you place any comments."""
            )

        else:
            messages.error(
                request,
                """Your find was not created, please try again."""
                )
        
        return HttpResponseRedirect(request.path_info)
    

class ViewAccount(generic.ListView):
    """
    This is the view which allows a user to view their accound and posts
    they have previously made.
    """
    model = Find
    template_name = 'view_account.html'
    paginate_by = 2


class ViewFinds(generic.ListView):
    """
    This is the view which allows a user to view their previously created
    finds so they can edit/remove as desired.
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
    This is the view which allows a user to access a Find they have previously
    created to edit the details as they wish. Function starts withs a control
    to ensure the user trying to edit the find is the find author.
    """

    def get(self, request, slug):

        find = get_object_or_404(Find, slug=slug)

        if not find.author == request.user:
            messages.error(
                request,
                """Error, you are not the creator of this find, so therefore
                you cannot edit. Please log in to confirm your account."""
            )

            return render(
            request,
            "index.html",
            )

        else:

            return render(
            request,
                "create_find.html",
                {
                    "find_form": FindForm(instance=find), 'slug': slug
                },
            )
    
    def post(self, request, slug):

        find = get_object_or_404(Find, slug=slug)

        find_form = FindForm(data=request.POST, instance=find)

        if find_form.is_valid():
            find_form.instance.slug = slugify(find_form.instance.title)
            find = find_form.save()
            find.slug = slugify(find.title)
            find.save()

            messages.success(
                request,
                "Find successfully edited."
            )

        else:
        
            messages.error(
                request,
                """Your find was not edited, please try again."""
            )
        
        return HttpResponseRedirect(reverse('view_finds'))


class DeleteFind(View):
    """
    This is the view which is triggered when a user confirms they want to
    delete one of their previous finds. Function starts with a control to
    ensure user trying to delete the find is the find author. 
    """

    def get(self, request, slug):
        find = get_object_or_404(Find, slug=slug)

        if not find.author == request.user:
            messages.error(
                request,
                """Error, you are not the creator of this find, so therefore
                you cannot delete it. Please log in to confirm your account."""
            )
            return render(
            request,
            "index.html",
            )
        
        else:

            find.delete()
            
            messages.info(
                request,
                """Find deleted."""
            )

            return HttpResponseRedirect(reverse('view_finds'))
