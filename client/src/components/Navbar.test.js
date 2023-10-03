import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "helpers/testHelper";
import Navbar from "./Navbar";

test("should contain the Home link", async () => {
  renderWithProviders(<Navbar />);
  let link;
  await waitFor(() => {
    link = screen.getByRole("link", {name: "Home"});
  })
  expect(link).toBeInTheDocument();
});
