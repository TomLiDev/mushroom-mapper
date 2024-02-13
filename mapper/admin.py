from django.contrib import admin
from .models import Find, Comment, Habitat
from django_summernote.admin import SummernoteModelAdmin


@admin.register(Find)
class PostAdmin(SummernoteModelAdmin):

    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('status', 'created_on')
    summernote_fields = ('content')
    list_display = ('title', 'slug', 'status', 'location_coordinates', 'created_on')
    search_fields = ['title', 'content']


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = ('name', 'body', 'find', 'created_on', 'approved')
    list_filter = ('approved', 'created_on')
    search_fields = ['name', 'email', 'body']
    actions = ['appove_comments']

    def approve_comments(self, request, queryset):
        queryset.update(approved=True)


admin.site.register(Habitat)
class HabitatAdmin(admin.ModelAdmin):

    prepopulated_fields = {'habitat'}
    list_display = ('habitat', 'created_on')
    list_filter = ('approved', 'created_on')