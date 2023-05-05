import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";
import Error from "./Error";
import About from "../Pages/About";
import Appart from "../Pages/Appart";

const Router = () => {
  return (
    <div className="mainContainer">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Appart />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
