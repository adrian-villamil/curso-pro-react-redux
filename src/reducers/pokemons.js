import { fromJS, getIn, setIn } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return setIn(state, ['pokemons'], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = state.get('pokemons').findIndex(pokemon => {
        return pokemon.get('id') === action.payload.pokemonId;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite']);
      return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
    default:
      return state;
  }
};