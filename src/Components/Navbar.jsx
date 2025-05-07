import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <h3>Movie Time</h3>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/watchlist"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            WatchList
          </Link>
        </li>
      </ul>
    </nav>
  );
}
