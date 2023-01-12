import {render, screen} from "@testing-library/react";
import PokeCard from "./poke-card";
import bulbasaur from '../bulbasaur.json';

describe('PokeCard', () => {
    it("should show pokemon's name", () => {
        render(<PokeCard pokemon={bulbasaur}/>);


        expect(screen.getByText(bulbasaur.name)).toBeInTheDocument();
    });

    it("should show pokemon's picture", () => {
        render(<PokeCard pokemon={bulbasaur}/>);

        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument();
        expect(image.src).toBe(bulbasaur.sprites.other["official-artwork"].front_default);
    });

    it("should show pokemon's health", () => {
        render(<PokeCard pokemon={bulbasaur}/>);

        const health = screen.getByText('45 hp');
        expect(health).toBeInTheDocument();
    });

    it("should show pokemon's attack", () => {
        render(<PokeCard pokemon={bulbasaur}/>);

        const attack = screen.getByText('49');
        expect(attack).toBeInTheDocument();
    });
});
