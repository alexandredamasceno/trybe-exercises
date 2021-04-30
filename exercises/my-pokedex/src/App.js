import './App.css';
import pokemons from './data';
import PokInfo from './components/PokInfo';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <main className="pokemons-info">
     {pokemons.map(pokemon => <PokInfo pokemon={pokemon}/>)}
     </main>
    </div>

  );
}

export default App;
