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

test('initial conditions', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  //check that button is enabled
  expect(colourButton).toBeEnabled();

  //check that checkbox is unchecked
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables and enables button', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  //check that checkbox is enabled when button clicked
  fireEvent.click(checkbox);
  expect(colourButton).toBeDisabled();
  expect(colourButton).toHaveStyle({ backgroundColor: 'gray' });

  //check that checkbox is disabled when button clicked again
  fireEvent.click(checkbox);
  expect(colourButton).toBeEnabled();
  expect(colourButton).not.toHaveStyle({ backgroundColor: 'gray' });
});
