import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Movierender.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWatchlist } from "../Slices/WatchlistSlice";
export function Movierender({ movie }) {
  const movieImage = `../images/${movie.id}.jpg`;

  const dispatch = useDispatch();

  const AddWatchList = (movie) => {
    dispatch(setWatchlist(movie));
  };

  return (
    <div className="card">
      <div className="custom-card h-10 shadow-sm ">
        {" "}
        <img className="movieImage" src={movieImage} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">{movie.genre}</p>
        <p className="card-text">{movie.year}</p>
        <p className="card-text">{movie.rating}</p>
        <a href="https://www.youtube.com">WATCH NOW</a>

        <button onClick={() => AddWatchList(movie)}>ADD TO WATCHLIST</button>
      </div>
    </div>
  );
}
