import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'

import App from '../src/App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Scheduler/i);
  expect(title).toBeInTheDocument();
});
