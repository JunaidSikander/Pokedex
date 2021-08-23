import React from 'react'
import Pokecard from "./Pokecard";

const Pokedex = ({pokemons, exp, winner}) => {
    return (
        <div className='Pokedex'>
            <div className='Pokedex-title'>
                <h1 className={`Pokedex-${winner ? 'winner' : 'loser'}`}>
                    {winner ? 'Winning Hand' : 'Losing Hand'}
                </h1>
                <h4>Total Experience: {exp}</h4>
            </div>
            <div className='Pokecard-container'>
                {pokemons.map((pokemon, index) => (
                    <Pokecard key={index} {...pokemon} />
                ))}
            </div>
        </div>
    )
};

export default Pokedex;
