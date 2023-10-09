import { ADD_MOVIES } from "../actions";

const initialMoviesStore = {
  movies: [], // Change from 'list' to 'movies'
  favourites: []
}

export default function movies(state = initialMoviesStore, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      movies: action.movies // Update to 'movies'
    }
  }
  return state;
}
