import React from "react";
import LogementBadge from "../Badge/LogementBadge";
import Collapse from "../Collapse/Collapse";
import LogementStars from "../Stars/LogementStars";
import "./logementDescription.scss";

const LogementDescription = ({ data }) => {
  const name = data.host.name;
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

  return (
    <div className="logementDescriptionContainer">
      <div className="logementTitleContainer">
        <h2>{data.title}</h2>
        <div className="logementHostContainer">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
          <img src={data.host.picture} alt={data.title}></img>
        </div>
      </div>
      <p className="logementLocation">{data.location}</p>
      <div className="logementStarContainer">
        <div className="badgeContainer">
          {data.tags.map((tag, index) => {
            return <LogementBadge key={index} tag={tag} />;
          })}
        </div>
        <div className="ratingContainer">
          <LogementStars rating={data.rating} />
          <div className="logementHostContainerMobile">
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
            <img src={data.host.picture} alt={data.title}></img>
          </div>{" "}
        </div>
      </div>

      <div className="logementCollapseContainer">
        <div className="collapseLogement">
          <Collapse
            content={{
              title: "Description",
              text: data.description,
            }}
          />
        </div>
        <div className="collapseLogement">
          <Collapse
            content={{
              title: "Equipments",
              text: data.equipments,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogementDescription;
