SOURCE_PATH = website/manage.py

all: run_launch

run_launch:
	python3 $(SOURCE_PATH) makemigrations
	python3 $(SOURCE_PATH) migrate
	python3 $(SOURCE_PATH) runserver 0.0.0.0:8000