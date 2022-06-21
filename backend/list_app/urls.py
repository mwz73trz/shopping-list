from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views_auth import *
from .views import *

router = DefaultRouter()
router.register('categories', CategoryViewSet, basename='category')
router.register('items', ItemViewSet, basename='item')
router.register('users', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', handle_login),
    path('logout/', handle_logout),
]