import React from 'react';
import PropTypes from "prop-types";
import './poke-card.css'

const PokeCard = ({pokemon}) => {
    return (<div className={"poke-card"}>
        <img className={"picture"} role="img" src={pokemon?.sprites?.other?.['official-artwork']?.front_default}/>
        <h1 className={"name"}>{pokemon?.name}</h1>
    </div>)
};

PokeCard.propTypes = {
    pokemon: PropTypes.any
}

export default PokeCard;
