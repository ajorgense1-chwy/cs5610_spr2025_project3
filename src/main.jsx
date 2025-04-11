import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AllPokemon from './pokemon/AllPokemon'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pokemon/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllPokemon />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
