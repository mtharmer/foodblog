import { render, screen } from '@testing-library/react';
import App from './App';

test('should render the App', () => {
  render(<App />);
});

test('should render the Navbar', () => {
  render(<App />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
})
