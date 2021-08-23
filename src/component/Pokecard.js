import React from 'react'

const Pokecard = ({base_experience, id, name, type}) => {

    const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

    return (
        <div className='Pokecard'>
            <div><h4>{name}</h4></div>
            <div className='Pokecard-image'>
                <img alt={name}
                    // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                     src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`}
                />
            </div>
            <div className='Pokecard-data'>{type}</div>
            <div className='Pokecard-data'>EXP: {base_experience}</div>
        </div>
    )
};

export default Pokecard;
