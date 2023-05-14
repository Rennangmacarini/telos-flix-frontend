import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieProvider from "../contexts/MovieProvider";
import Films from "../pages/Films";
import CreateFilms from "../pages/createFilms";


export default  function AppRoutes() {
  return (
      <Routes>
        <Route element={
          <MovieProvider>
          <CreateFilms/>
          </MovieProvider>
        } path="/" exact />
      </Routes>
  );
}

