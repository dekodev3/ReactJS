import "./MoviesList.css";
import React from "react";

export default function MoviesList() {
  const greetMsg =
    "Welcome to our site where you can find the list of 10 best movies by IMBD in 2022";

  const moviesList = [
    "Everything Everywhere All at Once",
    "Avatar: The Way of Water ",
    "The Fabelmans ",
    "Tár",
    "Glass Onion",
    "Aftersun",
    "The Banshees of Inisherin",
    "The Batman",
    "Boiling Point",
    "Top Gun: Maverick",
  ];
  return (
    <div className="movie-list">
      <h1>{greetMsg}</h1>
      <ul>
        {moviesList.map((movie, index) => {
          return <li key={index}> {movie}</li>;
        })}
      </ul>
    </div>
  );
}
