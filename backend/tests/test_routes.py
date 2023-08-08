import pytest
from . import create_app
import requests_mock

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_pokemons(client):
    # Mocking the third-party API response
    with requests_mock.Mocker() as m:
        m.get('https://pokeapi.co/api/v2/pokemon?limit=150', json={'results': 'fake_data'})
        response = client.get('/pokemons')
        assert response.status_code == 200
        assert response.get_json() == {'results': 'fake_data'}

def test_get_pokemon(client):
    # Mocking the third-party API response
    with requests_mock.Mocker() as m:
        m.get('https://pokeapi.co/api/v2/pokemon/pikachu', json={'name': 'pikachu'})
        response = client.get('/pokemon/pikachu')
        assert response.status_code == 200
        assert response.get_json() == {'name': 'pikachu'}