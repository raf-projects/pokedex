import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Nav() {

    let pokemon = useSelector((state : any) => state.pokemon);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pokedex</Link>
                {
                    pokemon.name ? <button className='btn btn-outline-info'>{pokemon.name}</button> : <button className='btn btn-outline-warning'>No Pokemon Selected</button>
                }
            </div>

            
        </nav>
    )
}

export default Nav