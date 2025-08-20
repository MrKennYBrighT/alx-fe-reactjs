import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Learn React link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});
