import os, sys
from flask import Flask
from flask_cors import CORS
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'app'))
from routes import pokemon_routes

def create_app(config_name):
    app = Flask(__name__)
    CORS(app, origins=['http://127.0.0.1:8000'])  # Enables CORS for all routes

    app.config.from_object(config_name)  # Load configurations, e.g., from a config.py file

    # Register blueprints
    app.register_blueprint(pokemon_routes)

    return app