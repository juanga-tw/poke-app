import "./App.css";
import PokeCard from "./poke-card/poke-card";
import { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { getPokeList, getPokemon } from "./poke-service";

const App = () => {
  const [list, setList] = useState([]);
  const [pokemon, setPokemon] = useState(undefined);

  const showPokemon = async (pokemonName) => {
    const data = await getPokemon(pokemonName);
    setPokemon(data);
  };

  useEffect(() => {
    getPokeList().then((data) => setList(data.results));
  }, []);

  return (
    <>
      <ul className={"list-group"} role={"list"}>
        {list.map((pokemon) => (
          <a
            href={"#"}
            onClick={(evt) => {
              showPokemon(pokemon.name);
              evt.preventDefault();
            }}
            className={"list-group-item list-group-item-action poke-item"}
            key={pokemon.name}
            role={"listitem"}
          >
            {pokemon.name}
          </a>
        ))}
      </ul>
      {pokemon && (
        <div className={"detail d-flex flex-column"} role={"article"}>
          <div role={"navigation"} className={"m-2"}>
            <a
              href={"#"}
              role={"button"}
              onClick={(evt) => {
                setPokemon(undefined);
                evt.preventDefault();
              }}
            >
              <ArrowLeft size={32} />
            </a>
          </div>
          <div
            className={
              "flex-grow-1 d-flex align-items-center justify-content-center"
            }
          >
            <PokeCard pokemon={pokemon} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
