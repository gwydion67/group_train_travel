from django.urls import path
from . import views

#/*******URLs***********/

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),

    path('user/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/login/refresh/', views.MyTokenObtainPairView.as_view(), name='token_refresh'),
    
    path('user/profile/', views.get_user_profile, name="getuserprofile"),
    path('users/', views.get_user, name="getuser"),
    path('register/', views.register, name="register"),
]