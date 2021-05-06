import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = actors.map((actor) => {
    return(
    <div> 
      <h3>{actor.name}</h3>
      <ul>
        <li>Movies: 
          <ul>{actor.movies.map((movie)=> <li> {movie}</li>)}</ul> 
        </li>
      </ul>
    </div>
    )
  })



  return (<div>
    <h1>Actor's Page</h1>
    {renderActors}
    </div>);
}

export default Actors;
