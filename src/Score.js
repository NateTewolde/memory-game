import React from "react";

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="score">
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
};

export default Score;
