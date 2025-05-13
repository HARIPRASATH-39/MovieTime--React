import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Movierender.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteWatchlist } from "../Slices/WatchlistSlice";

export function Watchlist() {
  const watchlist = useSelector((state) => state.watchlistinfo.watchlist);
  const dispatch = useDispatch();
  console.log(watchlist);

  const deletemovie = (index) => {
    dispatch(deleteWatchlist(index));
  };

  return (
    <div>
      <h1>Watch List</h1>

      {watchlist.map((movie, index) => (
        <div key={movie.id} className="card">
          <div className="custom-card h-10 shadow-sm ">
            {" "}
            <img className="movieImage" src={`../images/${movie.id}.jpg`} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <p className="card-text">{movie.genre}</p>
            <p className="card-text">{movie.year}</p>
            <p className="card-text">{movie.rating}</p>
            <a href="https://www.youtube.com">WATCH NOW</a>
            <button
              className="btn btn-danger"
              onClick={() => deletemovie(index)}
            >
              DELETE FROM WATCHLIST
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
