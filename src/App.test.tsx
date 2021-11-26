import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { addSpacesToCamelCase } from './App';

test('button has correct behaviour', () => {
  render(<App />);

  //button name text
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  //cutton styled colour
  expect(colourButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  //button click
  fireEvent.click(colourButton);

  //button colour changes
  expect(colourButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  //button text changes
  expect(colourButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox');

  //check that button is enabled
  expect(colourButton).toBeEnabled();

  //check that checkbox is unchecked
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables and enables button', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
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

//unit function test

describe('spaces before camel case capitl letters', () => {
  test('Works for 0 inner capitals', () => {
    expect(addSpacesToCamelCase('Red')).toBe('Red');
  });
  test('Works for 1 inner capitals', () => {
    expect(addSpacesToCamelCase('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for 2 inner capitals', () => {
    expect(addSpacesToCamelCase('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
