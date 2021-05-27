import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./movieCard";
import "./movieList.css";
const MovieList = ({ movieList, search, tabStar }) => {
  return (
    <div className="movie-list">
      {movieList.filter((el)=>el.rating >= tabStar.filter((el)=>el.isColored).length).filter((movie)=>movie.title.toUpperCase().match(search.toUpperCase())).map((movie)=>{
          return (
            <Link to={`/description/${movie.id}`}>
              <MovieCard movieCard={movie}></MovieCard>
            </Link>
          );
        })}
    </div>
  );
};

export default MovieList;