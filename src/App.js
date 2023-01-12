import logo from './logo.svg';
import './App.css';
import PokeCard from "./poke-card/poke-card";
import bulbasaur from './bulbasaur.json'

function App() {
  return (
    <PokeCard pokemon={bulbasaur}/>
  );
}

export default App;
