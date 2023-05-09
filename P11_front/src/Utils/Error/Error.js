import React from "react";
import { Link } from "react-router-dom";
import "./err.scss";

const Error = () => {
  return (
    <div className="errorPageContainer">
      <h2>404</h2>
      <p className="errorPageText1">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p className="errorPageText2">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
};

export default Error;
