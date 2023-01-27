import React from 'react';
import PropTypes from "prop-types";
import './poke-card.css'

const PokeCard = ({pokemon}) => {
    return (
        <div className={"card"}>
            <div className={"poke-card"}>
                <img className={"picture"} role="img"
                     src={pokemon?.sprites?.other?.['official-artwork']?.front_default}/>
                <h1 className={"name"}>
                    {pokemon?.name}
                </h1>
            </div>
            <div className={"poke-card-footer"}>
                <div className={"base-stat"}>
                    <h3 data-testid="attack">{pokemon?.stats?.[1]['base_stat']}K</h3>
                    <div>Attack</div>
                </div>
                <div className={"base-stat"}>
                    <h3 data-testid="defense">{pokemon?.stats?.[2]['base_stat']}K</h3>
                    <p>Defense</p>
                </div>
            </div>
        </div>
    )
};

PokeCard.propTypes = {
    pokemon: PropTypes.any
}

export default PokeCard;
