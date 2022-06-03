import React from "react";
import "./Pokecard.css";
/**This is the pokemon IMAGE database */

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/**This is the layout of an indvidual pokemon card */

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className="pokecard-main-div">
      <img className="pokecard-img" src={imgSrc} alt=""></img>
      <p className="pokecard-id">ID: {props.id}</p>
      <p className="pokecard-name">Name: {props.name}</p>
      <p className="pokecard-type">Type: {props.type}</p>
      <p className="pokecard-base-experience">
        Base_Experience: {props.base_experience}
      </p>
    </div>
  );
}

export default Pokecard;
export { POKE_API };
