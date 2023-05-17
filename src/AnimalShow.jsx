import React, { useState } from "react";
import heart from "./assets/heart.svg";

const AnimalShow = ({ title, image }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };
  return (
    <div onClick={handleClick} className="animal-show">
      <img className="animal" src={image} alt={title} />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{
          width: `${20 + 20 * clicks}px`,
        }}
      />
    </div>
  );
};

export default AnimalShow;
