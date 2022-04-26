import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('When App start title gets printed', () => {
  render(<App />);
  const linkElement = screen.getByText(/Git Hub Public Repositories/i);
  expect(linkElement).toBeInTheDocument();
});
