import React, { useState } from 'react';
import './App.css';

function App() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleGuess = () => {
    if (userGuess === null) {
      setMessage('Please enter a valid guess.');
      return;
    }

    if (userGuess === targetNumber) {
      setMessage('Congratulations! You guessed the correct number!');
    } else {
      setMessage(`Sorry, the correct number is ${targetNumber}. Try again!`);
    }
  };

  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <p>Can you guess the correct number between 1 and 10?</p>
      <input
        type="number"
        value={userGuess === null ? '' : userGuess}
        onChange={(e) => setUserGuess(parseInt(e.target.value, 10))}
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default App;

