import './App.css';
import PokeCard from "./poke-card/poke-card";
import {useEffect, useState} from "react";

const App = () => {
    const [pokemon, setPokemon] = useState('');

    const getPokemon = async (pokemonName) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            return await response.json();
        } catch (err) {
            console.log('Something went wrong!');
        }
    };

    useEffect(() => {
        (async () => {
            setPokemon(await getPokemon('bulbasaur'));
        })();
    }, [])

    return (
        <div className={"container"}>
            <PokeCard pokemon={pokemon}/>
        </div>
    )
};

export default App;
