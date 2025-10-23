import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre}</span>
      ))}
    </>
  );
}

export default Movie;
