import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const Display = ({ search = "" }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  // Generate a random price for each movie
  const generateRandomPrice = () => {
    return (Math.random() * (20 - 5) + 5).toFixed(2); // Random price between $5 and $20
  };

  // Function for fetching a trend movies if the query is empty
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response.data.results);
      // Add random price to each movie
      const moviesWithPrices = response.data.results.map((movie) => ({
        ...movie,
        price: generateRandomPrice(),
      }));

      setMovies(moviesWithPrices); // Update state with fetched movies
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again later.");
    }
  };
  // Function to fetch movies based on search query
  const fetchMoviesBySearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      // Add random price to each movie
      const moviesWithPrices = response.data.results.map((movie) => ({
        ...movie,
        price: generateRandomPrice(),
      }));
      setMovies(moviesWithPrices); // Update state with fetched movies
    } catch (error) {
      console.error("Error fetching movies by search:", error);
      setError("Failed to fetch movies. Please try again later.");
    }
  };

  useEffect(() => {
    if (search.trim() === "") {
      fetchMovies();
    } else {
      fetchMoviesBySearch(search);
    } // Call the fetch function when the component mounts
  }, [search]); // Re-Run the effect when the search query changes
  //   console.log(fetchMovies());

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Display;
