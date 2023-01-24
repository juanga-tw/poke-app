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
                    <span>  {pokemon?.stats?.[0]['base_stat']}hp</span>
                </h1>
                <p className={"poke-card-text"}>{pokemon?.base_experience} xp</p>
            </div>
            <div className={"poke-card-footer"}>
                <div className={"base-stat"}>
                    <h3 data-testid="attack">{pokemon?.stats?.[1]['base_stat']}K</h3>
                    <p>Attack</p>
                </div>
                <div className={"base-stat"}>
                    <h3>{pokemon?.stats?.[3]['base_stat']}K</h3>
                    <p>Special Attack</p>
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
