import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const Display = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
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

      setMovies(response.data.results); // Update state with fetched movies
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again later.");
    }
  };
  useEffect(() => {
    fetchMovies(setMovies, setError); // Call the fetch function when the component mounts
  }, []);
  //   console.log(fetchMovies());

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Display;
