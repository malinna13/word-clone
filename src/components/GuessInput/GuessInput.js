import React from "react";

function GuessInput({ setGuess, status }) {
  const [guessWord, setGuessWord] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setGuess(guessWord);
        setGuessWord("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={status !== "playing"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        value={guessWord}
        onChange={(e) => setGuessWord(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
