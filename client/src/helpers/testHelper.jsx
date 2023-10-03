import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import authReducer from "reducers/authSlice";
import recipeReducer from "reducers/recipeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      auth: {},
      recipes: {}
    },
    store = configureStore({
      reducer: {
        auth: authReducer,
        recipes: recipeReducer
      },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
