import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Movierender.css";
export function Movierender({ movie }) {
  const movieImage = `../images/${movie.id}.jpg`;
  return (
    <div className="card">
      <div className="card h-10 shadow-sm custom-card">
        {" "}
        <img className="movieImage" src={movieImage} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">{movie.genre}</p>
        <p className="card-text">{movie.year}</p>
        <p className="card-text">{movie.rating}</p>
        <a href="https://www.youtube.com">WATCH NOW</a>
      </div>
    </div>
  );
}
