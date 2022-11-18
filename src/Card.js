import React from "react";

const Card = ({ card, handleCardClick }) => {
  return (
    <div className="card" id={card.id} onClick={handleCardClick}>
      {card.name}
    </div>
  );
};

export default Card;
