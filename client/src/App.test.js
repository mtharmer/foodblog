import { fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "helpers/testHelper";

describe("App", () => {
  test("should render the Navbar", async () => {
    renderWithProviders(<App />);
    expect(await screen.findByRole("navigation")).toBeInTheDocument();
  });
});

describe("Routing", () => {
  test("should render the recipes route", async () => {
    renderWithProviders(<App />);
    const recipesLink = await screen.findByText(/recipes/i)
    expect(recipesLink).toBeInTheDocument();
    fireEvent.click(recipesLink)

    expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { value: "Recipes" })).toBeInTheDocument()
  });
});
