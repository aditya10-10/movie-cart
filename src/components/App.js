import React, { Component } from "react";
import { connect } from 'react-redux';
import { addMovies, addFavourite, setShowFavourites } from '../actions'; // Assuming you have an actions file
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data"; // Correct import path for your data

class App extends Component {
  componentDidMount() {
    // Dispatch the action to add movies when the component mounts
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log(this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props;
  

    const index = favourites.indexOf(movie);
    // const index = fav

    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }
  

  render() {
//     console.log('Movies:', this.props.movies);
// console.log('Favourites:', this.props.favourites);

    const { movies, favourites, showFavourites } = this.props; // Use this.props.movies instead of this.props.list
    console.log('render', this.props.store.getState());

    const displayMovie = showFavourites ? favourites: movies;
 
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className= {`tab ${showFavourites ? '' : 'active-tabs'}`} onClick = { () => this.onChangeTab(false)}>Movies</div>
            <div className= {`tab ${showFavourites ? 'active-tabs' : ''}`} onClick = { () => this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovie.map((movie, index) => (
              <MovieCard  
                movie={movie} 
                key={`movies-${index}`} 
                dispatch = {this.props.store.dispatch}
                isFavourite = {this.isMovieFavourite(movie)}
                 />
            ))}
          </div>
          {displayMovie.length ===  0 ? <div className="no-movies"> NO MOVIES </div> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    favourites: state.movies.favourites, // Include favourites from the state
  };
};


const mapDispatchToProps = {
  addMovies,
  addFavourite
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
