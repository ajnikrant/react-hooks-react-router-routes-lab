import React from "react";
import { directors } from "../data";

function Directors() {
const renderDirectors = directors.map((director) => {
    return(
    <div> 
      <h3>{director.name}</h3>
      <ul>
        <li>Movies: 
          <ul>{director.movies.map((movie)=> <li> {movie}</li>)}</ul> 
        </li>
      </ul>
    </div>
    )
  })

  
  return (<div>
    <h1>Director's Page</h1>
    {renderDirectors}
  </div>);
}

export default Directors;
