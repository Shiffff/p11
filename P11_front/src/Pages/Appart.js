import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LogementDescription from "../Components/LogementComponents/LogementDescription";
import LogementCaroussel from "../Components/LogementComponents/LogementCaroussel";
import caller from "../Utils/caller";

const Appart = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    caller().then((data) => {
      const apt = data.find((apt) => apt.id === id);
      if (apt) {
        setData(apt);
        setIsLoading(false);
      } else {
        navigate("/logementunknown");
      }
    });
  }, [id]);

  return (
    <div className="logementContentContainer">
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <div>
          <LogementCaroussel title={data.title} pictures={data.pictures} />
          <LogementDescription data={data} />
        </div>
      )}
    </div>
  );
};

export default Appart;
