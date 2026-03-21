import React from "react";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: "5px", padding: "8px 12px" }}>
      {text}
    </button>
  );
}

export default Button;