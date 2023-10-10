// reducers/movies.js
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITE } from "../actions";

const initialMoviesStore = {
  movies: [],
  favourites: [],
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
      return {
        ...state,
        favourites: state.favourites.filter((movie) => movie.id !== action.movieId),
      };
    default:
      return state;
  }
}
