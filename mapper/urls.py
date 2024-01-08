from . import views
from django.urls import path

urlpatterns = [
    path('', views.FindList.as_view(), name='home'),
    path('<slug:slug>/', views.FindDetail.as_view(), name='find_detail'),
    path('like/<slug:slug>', views.FindLike.as_view(), name='find_like'),
    path('create_find', views.CreateFind.as_view(), name='create_find'),
    path('view_account', views.ViewAccount.as_view(), name='view_account'),
]
