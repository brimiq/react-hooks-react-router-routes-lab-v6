import React from "react";
import App from "./App";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // ✅ use the correct error page here
    children: [
      { index: true, element: <Home /> },
      { path: "movie/:id", element: <Movie /> },
      { path: "actors", element: <Actors /> },
      { path: "directors", element: <Directors /> },
    ],
  },
];

export default routes;
