#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define your project's directories
DJANGO_PROJECT_DIR=./
REACT_PROJECT_DIR=./frontend

# Navigate to the React project directory
cd $REACT_PROJECT_DIR

# Install dependencies and build the React app
echo "Installing React dependencies..."
npm install


# Navigate to the Django project directory
cd ..

pip install --upgrade pip
# Install Python dependencies
echo "Installing Django dependencies..."
pip install -r requirements.txt

# Apply migrations
echo "Applying migrations..."
python manage.py migrate

# Print deployment success message
echo "Deployment completed successfully!"
