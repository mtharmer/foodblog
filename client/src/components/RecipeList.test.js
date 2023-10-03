import { screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/testHelper";
import React from "react";
import RecipeList from "./RecipeList";

describe("RecipeList", () => {
  test("should contain a list div", async () => {
    renderWithProviders(<RecipeList recipes={[]} />)
    expect(await screen.findByTestId("recipe-list-div")).toBeInTheDocument();
  });

  test("should display a message when no recipes are present", async () => {
    renderWithProviders(<RecipeList recipes={[]} />)
    expect(await screen.findByText(/no recipes/i)).toBeInTheDocument();
  });

  test("should display at least one RecipeListItem when recipes are present", async () => {
    renderWithProviders(<RecipeList recipes={[{id: 1, title: "Some Title"}]} />)
    expect(await screen.findByText(/some title/i)).toBeInTheDocument();
  });
});
