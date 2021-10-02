import React from 'react'

import { render, screen } from 'react-dom'@testing-library/react';
import { Home } from './Index';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
