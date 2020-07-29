import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Page should have RESET DATA button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/RESET DATA/i);
  expect(linkElement).toBeInTheDocument();
});

test('Page should have ADD NEW button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ADD NEW/i);
  expect(linkElement).toBeInTheDocument();
});

test('Page should have DELETE button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/DELETE/i);
  expect(linkElement).toBeInTheDocument();
});
