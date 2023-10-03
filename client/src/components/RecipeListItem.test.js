import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/testHelper";
import RecipeListItem from "./RecipeListItem";

describe("RecipeListItem", () => {
  test("should contain a div for a recipe card", async () => {
    renderWithProviders(<RecipeListItem recipe={{}} />);
    expect(await screen.findByTestId("recipe-card-div")).toBeInTheDocument();
  });
});
