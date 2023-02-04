#!/bin/sh

pipenv run python manage.py migrate --noinput
# echo "from django.contrib.auth.models import User;
# User.objects.filter(email='$DJANGO_SUPERUSER_EMAIL').delete();
# User.objects.create_superuser('$DJANGO_SUPERUSER_USERNAME', '$DJANGO_SUPERUSER_EMAIL', '$DJANGO_SUPERUSER_PASSWORD')" | pipenv run python manage.py shell