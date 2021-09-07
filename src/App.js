import React from "react";
import SailorMoon from "./components/layout/SailorMoon";

const App = () => {
  const propsArray = [
    { 
      name: "Moon", 
      image: "https://i.imgur.com/QaRJ5mi.png" 
    },
    {
      name: "Mercury", 
      image: "https://i.imgur.com/1PyFrRh.png" 
    },
    { 
      name: "Venus", 
      image: "https://i.imgur.com/EL56qCY.png" 
    },
    { 
      name: "Mars", 
      image: "https://i.imgur.com/Gm630ri.png" 
    },
    { 
      name: "Jupiter", 
      image: "https://i.imgur.com/waVPnNn.png" 
    },
    { 
      name: "Saturn", 
      image: "https://i.imgur.com/wp8jcHZ.png" 
    },
    { 
      name: "Uranus", 
      image: "https://i.imgur.com/r42lUwd.png" 
    },
    {
      name: "Neptune",
      image: "https://i.imgur.com/ScXrABM.png",
    },
    { 
      name: "Pluto", 
      image: "https://i.imgur.com/hllbjib.png" 
    },
  ];

  const renderSailors = () => {
    return propsArray.map((object) => {
      return (
        <SailorMoon
          name={object.name}
          image={object.image}
          key={object.name}
        />
      );
    });
  };

  return (
    <>
      <div className="heading">Sailor Moon & Friends</div>
      <div className="container">
        {renderSailors()}
      </div>
    </>
  );
};

export default App;
