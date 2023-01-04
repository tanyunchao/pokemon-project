from django.db import models

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=120)
    hp = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    type = models.CharField(max_length=120)
    
    def _str_(self):
        return self.name