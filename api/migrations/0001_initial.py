# Generated by Django 4.0.5 on 2022-06-25 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Prueba',
            fields=[
                ('idusuario', models.AutoField(primary_key=True, serialize=False)),
                ('correo', models.CharField(max_length=20)),
                ('nombre', models.CharField(max_length=15)),
                ('apellido', models.CharField(max_length=15)),
                ('rut', models.IntegerField()),
                ('pwd', models.CharField(max_length=15)),
            ],
        ),
    ]