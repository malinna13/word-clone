import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");
  const addGuess = (item) => {
    const nextGuesses = [...guess, item];
    setGuess(nextGuesses);
    if (item === answer) setGameStatus("won");
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED)
      setGameStatus("lose");
  };
  return (
    <>
      <Banner status={gameStatus} answer={answer} numOfGuesses={guess.length} />
      <GuessResults results={guess} answer={answer} />
      <GuessInput setGuess={addGuess} status={gameStatus} />
    </>
  );
}

export default Game;
