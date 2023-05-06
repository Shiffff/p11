import React from "react";
import Star from "./Star";

const LogementStars = ({ rating }) => {
  const colorFull = "#FF6060";
  const colorEmpty = "#E3E3E3";
  const stars = [];
  for (let i = 1; i < rating; i++) {
    stars.push(<Star color={colorFull} key={i} />);
  }
  for (let i = rating; i <= 5; i++) {
    stars.push(<Star color={colorEmpty} key={i} />);
  }

  return <div className="starContainer">{stars}</div>;
};

export default LogementStars;
