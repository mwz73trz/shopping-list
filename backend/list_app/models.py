from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=25)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="categories", null=True, default=None)

    def __str__(self):
        return f'{self.name}'

class Item(models.Model):
    name = models.CharField(max_length=64)
    quantity = models.IntegerField()
    purchased = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return f'{self.name}'
