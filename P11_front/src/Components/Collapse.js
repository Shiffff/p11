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
        <img src="./chevron.svg"></img>
      </div>
      {showCollapse && <p className="collapseText">{content.text}</p>}
    </div>
  );
};

export default Collapse;
