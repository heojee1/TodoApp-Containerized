#!/bin/sh

# pipenv run python manage.py makemigrations
pipenv run python manage.py migrate --noinput
# pipenv run python manage.py createsuperuser --no-input
echo "from django.contrib.auth.models import User;
User.objects.filter(email='$DJANGO_SUPERUSER_EMAIL').delete();
User.objects.create_superuser('$DJANGO_SUPERUSER_USERNAME', '$DJANGO_SUPERUSER_EMAIL', '$DJANGO_SUPERUSER_PASSWORD')" | pipenv run python manage.py shell

# pipenv run python manage.py runserver 0.0.0.0:8000