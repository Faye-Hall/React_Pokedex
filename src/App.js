import React from "react";
import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";
import "./App.css";

/**This is written in App.js but rendered in index.js */
function App() {
  return (
    <React.Fragment className="App">
      <div className="main-div">
        {Pokedex.map((p) => (
          <div className="child-div" key={p.id}>
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
