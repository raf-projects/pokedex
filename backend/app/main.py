from flask import Flask
from flask_cors import CORS
from .routes import pokemon_routes

def create_app(config_name):
    app = Flask(__name__)
    CORS(app, origins=['http://localhost:3000'])  # Enables CORS for all routes

    app.config.from_object(config_name)  # Load configurations, e.g., from a config.py file

    # Register blueprints
    app.register_blueprint(pokemon_routes)

    return app