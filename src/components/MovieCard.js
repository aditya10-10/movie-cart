


//   render() {
//     const { movie, isFavourite } = this.props;
//     return (
//       <div className="movie-card">
        
//           <div className="footer">
//             <div className="rating">{movie.imdbRating}</div>
//             {
//               isFavourite
//               ? <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourites</button>
//               : <button className="unfavourite-btn" onClick={this.handleUnFavoriteClick}>Unfavourites</button>

//             }

//  {/* <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourites</button> */}

            
//           </div>
//         </div>
//       </div>
//     );
//   }




// MovieCard.js
import React from "react";
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie, dispatch } = this.props;
    dispatch(addFavourite(movie));
  }

  handleUnFavoriteClick = () => {
    const { movie, dispatch } = this.props;
    dispatch(removeFavourite(movie.id)); // Assuming you have a unique identifier like 'id'
  }

  render() {
    const { movie, isFavourite } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img alt="Movie Poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          {isFavourite ? (
            <button className="unfavourite-btn" onClick={this.handleUnFavoriteClick}>
              Unfavourite
            </button>
          ) : (
            <button className="favourite-btn" onClick={this.handleFavouriteClick}>
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
    );
  }
}

export default connect()(MovieCard);

