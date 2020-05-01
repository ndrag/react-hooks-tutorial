import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
// Note that this is here because sometimes no image is available. Our global const is in the capital & case structure you'd expect for a global.

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img width="200" alt={`The movie titled ${movie.Title}`} src={poster} />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;

// Once again a very simple component structure: we import react, declare our globals, assign an arrow function to a const, and export it by default. Note that we're destructuring its input.