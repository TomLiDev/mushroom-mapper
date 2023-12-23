from . import views
from django.urls import path

urlpatterns = [
    path('', views.FindList.as_view(), name='home'),
    path('<slug:slug>/', views.FindDetail.as_view(), name='find_detail'),
]
