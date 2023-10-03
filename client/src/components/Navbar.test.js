import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/testHelper";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should contain the Home link", async () => {
    renderWithProviders(<Navbar />);
    expect(screen.queryByText(/home/i)).toBeInTheDocument();
  });

  test("should contain the Recipes link", async () => {
    renderWithProviders(<Navbar />);
    const elem = screen.queryByText(/recipes/i)
    expect(elem).toBeInTheDocument();
    expect(elem).toBeVisible();
  });

  test("should display login option when no user is signed in", async () => {
    renderWithProviders(<Navbar />, {
      preloadedState: { auth: { loggedIn: false } }
    });

    const elem = screen.queryByText(/log in/i);
    expect(elem).toBeInTheDocument();
    expect(elem).toBeVisible();
  });

  test("should display signup option when no user is signed in", async () => {
    renderWithProviders(<Navbar />, {
      preloadedState: { auth: { loggedIn: false } }
    });

    const elem = screen.queryByText(/sign up/i);
    expect(elem).toBeInTheDocument();
    expect(elem).toBeVisible();
  });

  test("should not display log out or profile option when no user is signed in", async () => {
    renderWithProviders(<Navbar />, {
      preloadedState: { auth: { loggedIn: false } }
    });

    const logout = screen.queryByText(/log out/i);
    expect(logout).toBeInTheDocument();
    expect(logout).not.toBeVisible();

    const profile = screen.queryByText(/profile/i);
    expect(profile).toBeInTheDocument();
    expect(profile).not.toBeVisible();
  });

  test("should display the logout option when a user is signed in", async() => {
    renderWithProviders(<Navbar />, {
      preloadedState: { auth: { loggedIn: true } }
    });

    const elem = screen.queryByText(/log out/i);
    expect(elem).toBeInTheDocument();
    expect(elem).toBeVisible();
  });

  test("should display the profile option when a user is signed in", async() => {
    renderWithProviders(<Navbar />, {
      preloadedState: { auth: { loggedIn: true } }
    });

    const elem = screen.queryByText(/profile/i);
    expect(elem).toBeInTheDocument();
    expect(elem).toBeVisible();
  });
});
