import { useState } from "react";
import { Fragment } from "react";

function Pokemon(data) {
  const [language, setLanguage] = useState("english");
  const excludedTypes = [
    "Grass",
    "Fire",
    "Poison",
    "Flying",
    "Bug",
    "Normal",
    "Electric",
    "Ground",
    "Fairy",
    "Water",
    "Fighting",
    "Psychic",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Ice",
  ];
  const typeClassMap = {
    Grass: "green",
    Poison: "green",
    Fire: "orange",
    Flying: "blue",
    Bug: "red",
    Normal: "gray",
    Electric: "yellow",
    Ground: "blue",
    Fairy: "pink",
    Water: "blue",
    Fighting: "gray",
    Psychic: "purple",
    Rock: "dark",
    Ghost: "gray",
    Dragon: "red",
    Dark: "purple",
    Steel: "purple",
    Ice: "purple",
  };

  return (
    <>
      <div className="wrapper">
        <div className="button-header">
          <button
            className="button"
            onClick={() => {
              setLanguage("english");
            }}
          >
            English
          </button>
          <button
            className="button"
            onClick={() => {
              setLanguage("japanese");
            }}
          >
            Japanese
          </button>
          <button
            className="button"
            onClick={() => {
              setLanguage("chinese");
            }}
          >
            Chinese
          </button>
          <button
            className="button"
            onClick={() => {
              setLanguage("french");
            }}
          >
            French
          </button>
        </div>
        <div className="layer">
          {data.data.map((entry, index) => (
            <div key={index} className="card">
              <div className="img-name-cont">
                <img src={entry.image} />
                <label>
                  [{entry.id}] {entry.name[language]}
                </label>
              </div>
              <div className="type-cont">
                {entry.type.map((element) => (
                  <Fragment key={element}>
                    {!excludedTypes.includes(element) && (
                      <label>{element}</label>
                    )}
                    <label key={element} className={typeClassMap[element]}>
                      {element}
                    </label>
                  </Fragment>
                ))}
              </div>
              <div className="stats-cont">
                <div className="child-1">
                  <label>HP: {entry.base.HP}</label>
                  <label>Attack: {entry.base.Attack}</label>
                  <label>Defense: {entry.base.Defense}</label>
                </div>
                <div className="child-2">
                  <label>Sp Attack: {entry.base["Sp. Attack"]}</label>
                  <label>Sp Defense: {entry.base["Sp. Defense"]}</label>
                  <label>Speed: {entry.base.Speed}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pokemon;
