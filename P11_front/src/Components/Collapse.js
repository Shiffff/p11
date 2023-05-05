import React, { useState } from "react";

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
      {showCollapse && <p className="collapseText">{content.text}</p>}
    </div>
  );
};

export default Collapse;
