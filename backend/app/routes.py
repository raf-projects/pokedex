from flask import Blueprint, jsonify
import requests

pokemon_routes = Blueprint('pokemon_routes', __name__)

@pokemon_routes.route('/pokemons', methods=['GET'])
def get_pokemons():
    response = requests.get("https://pokeapi.co/api/v2/pokemon?limit=150")
    return jsonify(response.json())

@pokemon_routes.route('/pokemon/<string:name>', methods=['GET'])
def get_pokemon(name):
    response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{name}")
    return jsonify(response.json())