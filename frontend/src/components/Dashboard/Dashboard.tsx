import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../../models/Pokemon';
import { pokeActions } from '../../redux/slices/pokeSlice';
import "./Dashboard.css"

function Dashboard() {

    let dispatch = useDispatch();

    /* we can utilize useNavigate() do redirect directly in the js */
    let navigate = useNavigate();

    const [pokemons, setPokemons] = useState(Array<Pokemon>);
    const [filteredPokemon, setFilteredPokemon] = useState(Array<Pokemon>);

    useEffect(() => {
        async function getAllPokemon(){
            let response = await fetch("http://localhost:5000/pokemons");
            let responseBody = await response.json();

            setPokemons(responseBody.results)
            setFilteredPokemon(responseBody.results)
        } 

        getAllPokemon();


    }, []);

    async function getPokemon(event : any){
        let pokeName = event.target.innerText;

        let response = await fetch(`http://localhost:5000/pokemon/${pokeName}`);

        let responseBody = await response.json();

        //update the global state pokemon
        dispatch(pokeActions.setPokemon(responseBody));

        navigate("/pokecard")
        
    }

    function filterPokemon(event : any){
        let input = event.target.value;

        setFilteredPokemon(
            pokemons.filter(pokemon => {
                return pokemon.name.includes(input);
            })
        )

    }

  return (
    <div id='poke-list-container'>
        <input type="text" onChange={filterPokemon}/>
        {
            filteredPokemon.map((pokemon, index) => {
                return (
                    <button className='btn btn-primary' key={index} onClick={getPokemon}>{pokemon.name}</button>
                );
            })
        }
    </div>
  )
}

export default Dashboard