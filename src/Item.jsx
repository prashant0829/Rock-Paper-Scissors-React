import React from "react";

function Item({ image, alt, name, onButtonClick }) {
  return (
    <div className="item">
      <img src={image} alt={alt} />
      <button onClick={() => onButtonClick(name)}>{name}</button>
    </div>
  );
}

export default Item;
