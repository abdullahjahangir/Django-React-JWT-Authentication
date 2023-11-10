from django.urls import path, include
from .views import RegisterViewSet, LoginViewSet, UserViewSet
from knox import views as knox_views

urlpatterns = [
    path("api/auth", include("knox.urls")),
    path("api/auth/register", RegisterViewSet.as_view()),
    path("api/auth/login", LoginViewSet.as_view()),
    path("api/auth/user", UserViewSet.as_view()),
    path("api/auth/logout", knox_views.LogoutView.as_view(), name="knox_logout"),
]
