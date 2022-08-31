import React from "react";
import shoes from "../shoes";
import { NavLink } from "react-router-dom";
const LaunchIndex = () => {
  return (
    <ul className="product">
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 1rem",
                color: isActive ? "red" : "steelblue",
                textDecoration: "none",
              };
            }}
            to={`/Launch/${slug}`}
          >
            <h3>{name}</h3>
            <img src={img} alt={name} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LaunchIndex;
