import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Pokemon } from '../../models/Pokemon';
import "./PokeCard.css"

function PokeCard() {

    const [isShiny, setShiny] = useState(false);

    let pokemon : Pokemon = useSelector((state:any) => state.pokemon);

  return (
    <div id="card-container">
        
        {
            pokemon.name ? <div id="poke-card">
                                <h3 id="poke-name">{pokemon.name}</h3>
                                <div id="img-container">
                                   <img src={isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt="shiny img" onMouseOver={() => {setShiny(true)}} onMouseLeave={() => setShiny(false)}/> 
                                </div>

                                {
                                    pokemon.moves.map((obj, index) => {
                                        return (
                                            index < 3 && <h4 key={index}>{obj.move.name}</h4>
                                        )
                                    })
                                }

                            </div> : <></>
        }
        
    </div>
  )
}

export default PokeCard