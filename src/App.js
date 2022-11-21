import React, { useState, useEffect } from "react";
import "./App.css";
import uniqid from "uniqid";
import Card from "./Card.js";
import Score from "./Score.js";

function App() {
  const [cards, setCards] = useState([
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
  ]);

  const shuffleArray = (arr) => {
    return arr.slice(0).sort(() => Math.random() - 0.5);
  };

  const [clickedCards, setClickedCards] = useState([]);
  const [clickedCard, setClickedCard] = useState("");
  const handleCardClick = (e) => {
    setClickedCard(e);
    setClickedCards([...clickedCards, e.target.id]);
    setCards(shuffleArray(cards));
  };

  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    const updateScores = () => {
      if (
        clickedCards
          .slice(0, clickedCards.length - 1)
          .includes(clickedCards[clickedCards.length - 1])
      ) {
        if (clickedCards.length - 1 > bestScore) {
          setBestScore(clickedCards.length - 1);
        }
        setClickedCards([]);
      }
    };
    updateScores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedCard]);

  return (
    <div className="wrapper">
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
      <Score currentScore={clickedCards.length} bestScore={bestScore} />
    </div>
  );
}

export default App;
