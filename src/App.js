import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { useEffect } from 'react';
import { getPokemon, getPokemonDetails } from './api';
import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemon();
      const pokemonDetailed = await Promise.all(pokemonRes.map(pokemon => getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
