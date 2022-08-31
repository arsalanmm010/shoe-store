import React from "react";
import { useParams } from "react-router-dom";
import Launch from "./Launch";
import shoes from "../shoes";
const LaunchShoe = () => {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <p>{name}</p>
      <img src={img} alt={name} />
      <p>
        <Link to="/Launch" element={<Launch />}>
          Back to Launch
        </Link>
      </p>
    </div>
  );
};

export default LaunchShoe;
