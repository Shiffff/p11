import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="homeContentContainer">
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <div className="homeContent">
          {data.map((appt, index) => {
            return (
              <div className="apptCard" key={index}>
                <Link to={`/logement/${appt.id}`}>
                  <img src={appt.cover} alt={appt.title}></img>
                  <p>{appt.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomeContent;
