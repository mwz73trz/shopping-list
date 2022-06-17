from re import M
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return f'{self.name}'

class Item(models.Model):
    name = models.CharField(max_length=64)
    quantity = models.IntegerField()
    purchased = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return f'{self.name}'
