import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "helpers/testHelper";
import React from "react";
import Recipes from "./Recipes";
import * as recipeSlice from "reducers/recipeSlice";

describe("Recipes", () => {
  it("should load a grid for recipes", async () => {
    renderWithProviders(<Recipes />);
    expect(await screen.findByTestId("recipe-list-grid")).toBeInTheDocument();
  });

  it("should dispatch the getRecipes action", async () => {
    const getRecipesSpy = jest.spyOn(recipeSlice, "getRecipes")
    renderWithProviders(<Recipes />);
    await waitFor(() => {
      expect(getRecipesSpy).toHaveBeenCalledTimes(1);
    });
  });
});
