import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const checkedWord = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${value && checkedWord[num].status} `}>
          {value ? checkedWord[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
