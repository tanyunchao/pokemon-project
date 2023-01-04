from django.contrib import admin
from .models import Pokemon

class PokemonAdmin(admin.ModelAdmin):
    list_display = ('name', 'hp', 'attack', 'defense', 'type')

# Register your models here.
admin.site.register(Pokemon, PokemonAdmin)