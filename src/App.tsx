import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColour, setButtonColour] = useState('red');
  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <button
      style={{ backgroundColor: buttonColour }}
      onClick={() => setButtonColour(newButtonColour)}
    >
      Change to {newButtonColour}
    </button>
  );
}

export default App;
