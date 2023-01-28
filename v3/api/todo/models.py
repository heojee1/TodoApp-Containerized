from django.db import models

# Create your models here.

class Todo(models.Model):
    content = models.CharField(max_length=100)

    def _str_(self):
        return self.content