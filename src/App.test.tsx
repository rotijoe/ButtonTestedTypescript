import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct behaviour', () => {
  render(<App />);

  //button name text
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });

  //cutton styled colour
  expect(colourButton).toHaveStyle({ backgroundColor: 'red' });

  //button click
  fireEvent.click(colourButton);

  //button colour changes
  expect(colourButton).toHaveStyle({ backgroundColor: 'blue' });

  //button text changes
  expect(colourButton).toHaveTextContent('Change to red');
});
