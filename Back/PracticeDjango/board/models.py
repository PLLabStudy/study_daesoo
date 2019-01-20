from django.db import models

# Create your models here.
class Board (models.Model):
    class Meta:
            verbose_name = "게시판"
            verbose_name_plural = "게시판 리스트"

    title = models.CharField(verbose_name="제목", max_length=100)
    content = models.TextField(verbose_name="내용")
