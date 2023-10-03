import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "helpers/testHelper";
import RecipeListItem from "./RecipeListItem";

test("RecipeListItem", async () => {
  renderWithProviders(<RecipeListItem recipe={{}} />);
  let txt;
  await waitFor(() => {
    txt = screen.getByText(/Go to/)
  })
  expect(txt).toBeInTheDocument();
})
