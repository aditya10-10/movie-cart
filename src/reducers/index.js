// reducers/movies.js
import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES  } from "../actions";

const initialMoviesStore = {
  movies: [],
  favourites: [],
  showFavourites: false
};

export function list(state = initialMoviesStore, action) {
  console.log("list reducers");
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

const initialSearchStore = {
  result: {}
};

export function search(state = initialSearchStore, action) {
  console.log("search reducers");

  return state;
}

// const initialRootState = {
//   list:  initialMoviesStore,
//   search: initialSearchStore
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     list: list(state.list, action),
//     search: search(state.search, action)
//   }
// }


export default combineReducers({
  list: list,
  search: search
});
