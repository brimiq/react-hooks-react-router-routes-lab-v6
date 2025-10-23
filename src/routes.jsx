import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Movie from "./components/Movie";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "movie/:id", element: <Movie /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
    ],
  },
];

export default routes;
