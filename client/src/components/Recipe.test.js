import React from "react";
import Recipe from "./Recipe";
import { renderWithProviders } from "helpers/testHelper";
import * as recipeSlice from "reducers/recipeSlice";
import { waitFor } from "@testing-library/react";

describe("Recipe", () => {
  test("should dispatch the getRecipe action on load", async () => {
    const recipe = {
      id: 1,
      title: "Some Recipe",
      instructions: "Some Instructions",
      ingredients: "Some Ingredients"
    }
    const getRecipeSpy = jest.spyOn(recipeSlice, "getRecipe");
    renderWithProviders(<Recipe />, {
      preloadedState: { recipes: { selectedRecipe: recipe } }
    });
    await waitFor(() => {
      expect(getRecipeSpy).toHaveBeenCalledTimes(1);
    });
  });
});
