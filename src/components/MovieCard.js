import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default MovieCard;
