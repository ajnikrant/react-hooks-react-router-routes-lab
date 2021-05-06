import React from "react";
import { movies } from "../data";

function Movies() {

  const renderMovies = movies.map((movie) => {
    return(
    <div> 
      <h3>{movie.title}</h3>
      <ul>
        <li>Genre: 
          <ul>{movie.genres.map((genre)=> <li> {genre}</li>)}</ul> 
        </li>
        <li>Time: {movie.time}</li>
      </ul>
    </div>
    )
  })

  return (<div>
    <h1>Movies Page</h1>
    {renderMovies}
    </div>);
}

export default Movies;
