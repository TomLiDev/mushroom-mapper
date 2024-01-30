from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
from location_field.models.plain import PlainLocationField


STATUS = ((0, "Draft"), (1, "Published"))


class Location(models.Model):
    county = models.CharField(max_length=100)
    location = PlainLocationField(based_fields=['county'], zoom=7)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return self.location
    

class Find(models.Model):
    title = models.CharField(max_length=300, unique=True)
    slug = models.SlugField(max_length=300)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="finds")
    updated_on = models.DateTimeField(auto_now=True)
    content = models.TextField()
    featured_image = CloudinaryField('image', default='placeholder')
    excerpt = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    likes = models.ManyToManyField(User, related_name='blog_likes', blank=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)


    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

    def number_of_likes(self):
        return self.likes.count()


class Comment(models.Model):
    find = models.ForeignKey(
        Find, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField()
    body = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return f"Comment {self.body} by {self.name}"
