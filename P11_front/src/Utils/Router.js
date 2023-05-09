import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import Error from "./Error/Error";
import About from "../Pages/About/About";
import Logement from "../Pages/Logement/Logement";

const Router = () => {
  return (
    <div className="mainContainer">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
