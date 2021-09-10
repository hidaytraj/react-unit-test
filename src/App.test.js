import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jest Learn', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jest Learn/i, { exact: false});
  expect(linkElement).toBeInTheDocument();
});
