import { render, screen } from "@testing-library/react";
import App from "../App";

test("should contain the Home link", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
});
