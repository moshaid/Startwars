import React from "react";
import { randomImage } from "../utils/helpers";

const Character = ({ character, handleShow }) => {
  const { name, num } = character;
  return (
    <div className="starwars" onClick={() => handleShow(character)}>
      <h4>{name}</h4>
      <div className="img-wrapper">
        <img src={randomImage(num)} alt={name} className="character-image" />
      </div>
    </div>
  );
};

export default Character;
