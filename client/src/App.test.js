import { screen, waitFor } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from 'helpers/testHelper';

test('should render the Navbar', async () => {
  renderWithProviders(<App />);
  let nav;
  await waitFor(() => {
    nav = screen.getByRole("navigation");
  })
  expect(nav).toBeInTheDocument();
})
