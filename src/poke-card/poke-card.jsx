import React from 'react';
import PropTypes from "prop-types";
import './poke-card.css'

const PokeCard = ({pokemon}) => {
    return (<div className={"poke-card"}>
        <img className={"picture"} role="img" src={pokemon?.sprites?.other?.['official-artwork']?.front_default}/>
        <h1 className={"name"}>{pokemon?.name}</h1>
        <div className={"stats"}>
            <div className={"base-stat"}>
                <h3>Health:</h3>
                <p>{pokemon?.stats?.[0]['base_stat']} {pokemon?.stats?.[0]?.stat?.name}</p>
            </div>
            <div className={"base-stat"}>
                <h3>Attack:</h3>
                <p>{pokemon?.stats?.[1]['base_stat']} </p>
            </div>
        </div>
    </div>)
};

PokeCard.propTypes = {
    pokemon: PropTypes.any
}

export default PokeCard;
