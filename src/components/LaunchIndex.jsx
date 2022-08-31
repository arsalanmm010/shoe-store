import React from "react";
import shoes from "../shoes";
import { NavLink } from "react-router-dom";
const LaunchIndex = () => {
  return (
    <ul>
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
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LaunchIndex;
