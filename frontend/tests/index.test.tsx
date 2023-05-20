import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'

import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/count is/i);
  expect(linkElement).toBeInTheDocument();
});
