# Generated by Django 4.0.4 on 2022-07-07 21:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='prueba',
            old_name='rut',
            new_name='edad',
        ),
        migrations.RemoveField(
            model_name='prueba',
            name='apellido',
        ),
    ]