import React, { useEffect, useState } from "react";
import "./carroussel.scss";

const LogementCaroussel = ({ pictures, title }) => {
  const [mainPic, setMainPic] = useState(pictures[0]);
  const [viewIndex, setViewIndex] = useState("1");

  const nextPic = () => {
    let index = pictures.findIndex((i) => i === mainPic);
    if (index === pictures.length - 1) {
      index = -1;
    }
    setViewIndex(index + 2);
    setMainPic(pictures[index + 1]);
  };

  const prevPic = () => {
    let index = pictures.findIndex((i) => i === mainPic);
    if (index === 0) {
      index = pictures.length;
    }
    setViewIndex(index);
    setMainPic(pictures[index - 1]);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        prevPic();
      } else if (event.key === "ArrowRight") {
        nextPic();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [prevPic, nextPic]);

  return (
    <div className="logementCaroussel">
      {pictures.length > 1 && (
        <img
          className="chevronCaroussel chevronCarousselLeft"
          src="../chevronCaroussel.svg"
          alt="icon"
          onClick={prevPic}
        ></img>
      )}
      <img src={mainPic} alt={title}></img>
      {pictures.length > 1 && (
        <img
          className="chevronCaroussel chevronCarousselRight"
          src="../chevronCaroussel.svg"
          alt="icon"
          onClick={nextPic}
        ></img>
      )}
      {pictures.length > 1 && (
        <p className="compteur">
          {viewIndex}/{pictures.length}
        </p>
      )}
    </div>
  );
};

export default LogementCaroussel;
