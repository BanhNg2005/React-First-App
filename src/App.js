import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [movies, setMovies] = useState([]); // State to store the movies

  useEffect(() => {
    searchMovies("Mission Impossible"); 
  }, []);

  // Function to search for movies
  const searchMovies = async (title) => { 
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json(); // Get the data from the response
      if (data.Search) {
        // Sort movies by year in descending order
        const sortedMovies = data.Search.sort((a, b) => b.Year - a.Year);
        setMovies(sortedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovies([]); // the empty array will show the "No movies found" message
    }
  };

  return (
    <div className="app">
      <h1>Moviex</h1>

      <div className="search">
        <input
          value={searchTerm} // get the value from the state
          onChange={(e) => setSearchTerm(e.target.value)} // update the state
          placeholder="Search for a movie..."
        />
        <img
          src={SearchIcon} 
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => ( // Loop through the movies
            <MovieCard movie={movie} /> // Show the movie card
          ))}
        </div> // if there are movies, show them
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div> // else, show a message
      )} 
    </div>
  );
};

export default App;