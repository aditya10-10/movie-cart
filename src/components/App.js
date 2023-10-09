import React, { Component } from "react";
import { connect } from 'react-redux';
import { addMovies } from '../actions'; // Assuming you have an actions file

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

  render() {
    const { movies } = this.props; // Use this.props.movies instead of this.props.list
    console.log('render', this.props.store.getState());

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies // Use state.movies.movies to access the 'movies' property
  };
};

const mapDispatchToProps = {
  addMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
