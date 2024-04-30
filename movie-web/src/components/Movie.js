import React, { useEffect, useState } from "react";
import search from "../assets/search.gif";
import "./Movie.css";
import MovieCard from "./MovieCard";

const url = "http://www.omdbapi.com?apikey=c0c39db8";

const Movie = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const serachMovie = async (title) => {
    const responce = await fetch(`${url}&s=${title}`);
    const data = await responce.json();
    //console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    serachMovie("x men");
  }, []);

  return (
    <div className="movie">
      <div className="headerDiv">
        <p className="h2 header">MOVIE FAVOURITES</p>
      </div>
      <div className="body">
        <input
          className=" inputSearch form-control"
          placeholder="Search a movie"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <img
          src={search}
          alt="search"
          className="imgSearch"
          onClick={() => serachMovie(title)}
        />
      </div>
      <div className="container">
        <div className="row">
          {movies?.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} />)
          ) : (
            <p className="h2">No Movies Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
