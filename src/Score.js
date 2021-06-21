import React from "react";

function Score({ message, userScore, computerScore }) {
  return (
    <div>
      <h4>{message}</h4>
      <h1>Score</h1>
      <p>
        {userScore} : {computerScore}
      </p>
    </div>
  );
}

export default Score;
