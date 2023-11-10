from django.db import models
from django.contrib.auth.models import User


class Todos(models.Model):
    data = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name="Todos", on_delete=models.CASCADE, null=True
    )
