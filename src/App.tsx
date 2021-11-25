import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColour, setButtonColour] = useState('red');
  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColour }}
        disabled={disabled}
        onClick={() => setButtonColour(newButtonColour)}
      >
        Change to {newButtonColour}
      </button>
      <input
        type="checkbox"
        id="disableCheckbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disableCheckbox">Disable button</label>
    </>
  );
}

export default App;
