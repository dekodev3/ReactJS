import React from "react";
import "./Academy.css";

const Academy = ({ academies, name }) => {
  
  return (
    <div>
      <h2 className="academy-h2">{name}</h2>
      <div className="academies_div">
        {academies.map((academy) => (
          <div className="academy-div" key={academy.id}>
            <h3>{academy.name}</h3>
            <p>{academy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
