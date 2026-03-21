import React from "react";

function PersonCard({ name, age, occupation }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
}

export default PersonCard;