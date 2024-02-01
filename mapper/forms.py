from .models import Comment, Find, Location
from django import forms


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('body',)


class FindForm(forms.ModelForm):
    class Meta:
        model = Find
        fields = ('title', 'author', 'content', 'location', 'location_coordinates','featured_image', 
                  'habitat', 'suspected_edible', 'suspected_poisonous')
