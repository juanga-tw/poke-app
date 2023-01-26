import axios from "axios";

export async function getPokeList() {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  return response.data;
}

export async function getPokemon(name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return response.data;
}
