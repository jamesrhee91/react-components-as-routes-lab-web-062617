import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div key={movie.title}>
            <h4>{movie.title}</h4>
            {Object.entries(movie).slice(1).map(att => {
              return (
                <ul key={att[0]}>
                  <li>{att[0]} : {att[1]}</li>
                </ul>
                )
              })}
          </div>
          )
        })
      }
    </div>
  );
};

export default Movies;
