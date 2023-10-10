
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";


export function addMovies (movies){
    return {
        type : ADD_MOVIES,
        movies
    }
}


// actions/index.js
// export const ADD_FAVOURITES = "ADD_FAVOURITES"; // Add this line

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
}

// ... your other actions


// actions/index.js
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export function removeFavourite(movieId) {
  return {
    type: REMOVE_FAVOURITE,
    movieId,
  };
}
