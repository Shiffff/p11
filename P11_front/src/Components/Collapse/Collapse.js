import React, { useState } from "react";
import "./collapse.scss";

const Collapse = ({ content }) => {
  const [showCollapse, setShowCollapse] = useState(false);

  return (
    <div className="collapseContainer">
      <div
        onClick={() => setShowCollapse(!showCollapse)}
        className="collapseTitle"
      >
        <p>{content.title} </p>
        <img
          className={showCollapse ? "activeCollapse" : ""}
          src="../chevron.svg"
          alt="Icone du menu"
        ></img>
      </div>
      {showCollapse && (
        <div className="collapseContent">
          {typeof content.text === "object" ? (
            <>
              {content.text.map((obj, index) => {
                return (
                  <p className="collapseText" key={index}>
                    {obj}
                  </p>
                );
              })}
            </>
          ) : (
            <p className="collapseText">{content.text}</p>
          )}{" "}
        </div>
      )}
    </div>
  );
};

export default Collapse;
