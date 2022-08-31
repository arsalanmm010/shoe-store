import React from "react";
import shoes from "../shoes";
const Home = () => {
  console.log(shoes);
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>
        A simple shoe app that is created using react router. Click the Launch
        in the navbar to see the shoes.
      </p>
    </div>
  );
};

export default Home;
