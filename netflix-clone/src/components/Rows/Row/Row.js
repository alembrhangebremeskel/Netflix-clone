import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    console.log("Fetching data from:", fetchUrl);
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        console.log("Fetched movies:", request.data.results);
        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log("Selected movie:", movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.error("Trailer not found!");
          }
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={
                movie.poster_path || movie.backdrop_path
                  ? `${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`
                  : "path/to/placeholder/image.jpg" // Placeholder image
              }
              alt={movie.name}
            />
          ))
        ) : (
          <p>Loading...</p> // Fallback loading message
        )}
      </div>
      <div style={{ padding: "5px"}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
