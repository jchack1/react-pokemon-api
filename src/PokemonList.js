import React from 'react'
import './App.css'
//when there is a loop, need key on top level element 

export default function PokemonList( { pokemon }) {
    return (
        <div className="Page">            
            {pokemon.map(p => (
                <div key={p} className="PokemonCard">{p}</div>
            ))}
        </div>
    )
}
