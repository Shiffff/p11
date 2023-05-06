import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import caller from "../../Utils/caller";

const HomeContent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    caller().then((data) => {
      setData(data);
      setIsLoading(false);
    });
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
