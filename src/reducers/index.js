// reducers/movies.js
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES  } from "../actions";

const initialMoviesStore = {
  movies: [],
  favourites: [],
  showFavourites: false
};

export default function movies(state = initialMoviesStore, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };
    case REMOVE_FAVOURITE:
      const filterArray = state.favourites.filter((movie) => movie !== action.movie);
      return {
        ...state,
        favourites: filterArray
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val
      }
    default:
      return state;
  }
}
