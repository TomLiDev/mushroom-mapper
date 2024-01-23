from . import views
from django.urls import path

urlpatterns = [
    path('', views.FindList.as_view(), name='home'),
    path('like/<slug:slug>/', views.FindLike.as_view(), name='find_like'),
    path('create_find/', views.CreateFind.as_view(), name='create_find'),
    path('view_account/', views.ViewAccount.as_view(), name='view_account'),
    path('view_finds/', views.ViewFinds.as_view(), name='view_finds'),
    path('detail/<slug:slug>/', views.FindDetail.as_view(), name='find_detail'),
    path('edit/<slug:slug>/', views.EditFind.as_view(), name='edit_find'),
    path('delete/<slug:slug>/', views.DeleteFind.as_view(), name='delete_find'),
]
