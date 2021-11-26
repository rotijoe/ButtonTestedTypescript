import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function addSpacesToCamelCase(str: string) {
  return str.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColour, setButtonColour] = useState('MediumVioletRed');
  const newButtonColour =
    buttonColour === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const [disabled, setDisabled] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColour }}
        disabled={disabled}
        onClick={() => setButtonColour(newButtonColour)}
      >
        Change to {addSpacesToCamelCase(newButtonColour)}
      </button>
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <label htmlFor="disableCheckbox">Disable button</label>
        <input
          type="checkbox"
          id="disableCheckbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default App;
