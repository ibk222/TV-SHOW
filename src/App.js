import React, { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Breaking Bad", year: 2008 },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <div className="app-container">
      <h1>My Favorite Movies & TV Shows</h1>
      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
