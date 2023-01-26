import { render, screen, within } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { getPokeList, getPokemon } from "./poke-service";
import bulbasaur from "./__fixtures__/bulbasaur.json";
import list from "./__fixtures__/pokemon_list.json";

jest.mock("./poke-service");

describe("App", () => {
  const build = () => {
    render(<App />);
  };

  beforeEach(() => {
    getPokeList.mockResolvedValue(list);
    getPokemon.mockResolvedValue(bulbasaur);
  });

  it("should show a list of pokemons", async () => {
    build();

    expect(await screen.findByRole("list")).toBeInTheDocument();
    expect((await screen.findAllByRole("listitem")).length > 0).toBe(true);
  });

  it("should be possible to see details for a pokemon", async () => {
    build();

    const items = await screen.findAllByRole("listitem");

    userEvent.click(items[0]);

    expect(await screen.findByRole("article")).toBeInTheDocument();
    expect(
      await within(await screen.findByRole("article")).findByText("bulbasaur")
    ).toBeInTheDocument();
  });

  it("should be possible to navigate back to the list when a pokemon is selected", async () => {
    build();

    const items = await screen.findAllByRole("listitem");

    userEvent.click(items[0]);

    userEvent.click(
      await within(await screen.findByRole("navigation")).findByRole("button")
    );
    expect(await screen.queryByRole("article")).not.toBeInTheDocument();
  });
});
