import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/testHelper";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should contain the Home link", async () => {
    renderWithProviders(<Navbar />);
    expect(await screen.findByRole("link", {name: "Home"})).toBeInTheDocument();
  });

  test("should contain the Recipes link", async () => {
    renderWithProviders(<Navbar />);
    expect(await screen.findByRole("link", {name: "Recipes"})).toBeInTheDocument();
  });
});
