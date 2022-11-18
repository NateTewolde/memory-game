import React from "react";
import "./App.css";
import uniqid from "uniqid";
import Card from "./Card.js";

// Steps:
// 1. Lay out 12 cards from an array.
// 2. Make array shuffle cards when a card is clicked
// 3. each time a card is clicked that cards id is added to a clicked array
// 4. Score keeper uses clicked Array to keep the score.
// 5. When a card is clicked that matches the clicked array then game starts over
// and score is added to completed scores array. highest from that array is shown

//components -> App, Card, Scores
const cards = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
  { name: "3", id: "3" },
  { name: "4", id: "4" },
  { name: "5", id: "5" },
  { name: "6", id: "6" },
  { name: "7", id: "7" },
  { name: "8", id: "8" },
  { name: "9", id: "9" },
  { name: "10", id: "10" },
  { name: "11", id: "11" },
  { name: "12", id: "12" },
];

function App() {
  const handleCardClick = (e) => {
    console.log("hi");
    console.log(e.target.id);
  };

  return (
    <div className="wrapper">
      <div onClick={(e) => handleCardClick(e)}>test div</div>
      <h1>Card Matching Game</h1>
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              handleCardClick={(e) => handleCardClick(e)}
              key={uniqid()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
