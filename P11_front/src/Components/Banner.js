import React from "react";

const Banner = ({ txt, pic }) => {
  return (
    <div className="bannerHomeContainer">
      <img src={pic} alt="Banner"></img>
      <p>{txt}</p>
    </div>
  );
};

export default Banner;
