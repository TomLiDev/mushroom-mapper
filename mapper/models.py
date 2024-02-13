from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


STATUS = ((0, "Draft"), (1, "Published"))

"""
Habitat model - Custom model for storing mushroom habitat information, links
to find model. 
"""
class Habitat(models.Model):
    habitat = models.CharField(max_length=300, blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return self.habitat
    

"""
Find model - Customised model for storing relevant information on a users
particular mushroom find.
"""
class Find(models.Model):
    title = models.CharField(max_length=300, unique=True)
    slug = models.SlugField(max_length=300)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="finds", blank=True, null=True)
    updated_on = models.DateTimeField(auto_now=True)
    content = models.TextField()
    featured_image = CloudinaryField('image', default='placeholder', blank=True)
    excerpt = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    likes = models.ManyToManyField(User, related_name='find_likes', blank=True)
    location_coordinates = models.TextField()
    habitat = models.ForeignKey(Habitat, on_delete=models.CASCADE, related_name="find_habitat", null=True, blank=True)
    suspected_edible = models.BooleanField(blank=True, default=False)
    suspected_poisonous = models.BooleanField(blank=True, default=False)
    

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

    def number_of_likes(self):
        return self.likes.count()


"""
Comment model - Model for storing relevant information for find comment
"""
class Comment(models.Model):
    find = models.ForeignKey(
        Find, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    body = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return f"Comment {self.body} by {self.name}"