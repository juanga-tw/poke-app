import axios from "axios";
import { getPokeList, getPokemon } from "./poke-service";
import list from "./__fixtures__/pokemon_list.json";
import bulbasaur from "./__fixtures__/bulbasaur.json";

jest.mock("axios");

describe("poke-service", () => {
  it("should get list of pokemons", async () => {
    axios.get.mockResolvedValue({ data: list });

    const result = await getPokeList();

    expect(result).toEqual(list);
    expect(axios.get).toHaveBeenLastCalledWith(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
  });

  it("should get a pokemon by its name", async () => {
    axios.get.mockResolvedValue({ data: bulbasaur });

    const result = await getPokemon("bulbasaur");

    expect(result).toEqual(bulbasaur);
    expect(axios.get).toHaveBeenLastCalledWith(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    );
  });
});
