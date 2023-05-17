import React, { useState } from "react";
import AnimalShow from "./AnimalShow";

import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg";
import cow from "./assets/cow.svg";
import dog from "./assets/dog.svg";
import gator from "./assets/gator.svg";
import horse from "./assets/horse.svg";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
const App = () => {
  const [animal, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal((prev) => [...prev, getRandomAnimal()]);
  };
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animals</button>
      <div className="animals-list">
        {animal.map((a, i) => {
          return <AnimalShow key={i} title={a} image={svgMap[a]} />;
        })}
      </div>
    </div>
  );
};

export default App;
