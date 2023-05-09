import React from "react";
import "./banner.scss";

const Banner = ({ txt, pic }) => {
  return (
    <div className="bannerHomeContainer">
      <img src={pic} alt="Banner"></img>
      <p>{txt}</p>
    </div>
  );
};

export default Banner;
