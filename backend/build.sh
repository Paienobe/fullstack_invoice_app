#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install requirements (modify for your package manager)
pip install -r requirements.txt

# Collect static files (with no input prompt)
python manage.py collectstatic --no-input

# You can add any other deployment steps here (e.g., database migrations)
python manage.py migrate