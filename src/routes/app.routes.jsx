import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieProvider from "../contexts/MovieProvider";
import Films from "../pages/Films";
import CreateFilms from "../pages/createFilms";
import CardsFilms from "../pages/cardsFilms";


export default  function AppRoutes() {
  return (
      <Routes>
        <Route element={
          <MovieProvider>
          <CardsFilms/>
          </MovieProvider>
        } path="/" exact />
      </Routes>
  );
}

