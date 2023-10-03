import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import authReducer from "reducers/authSlice";
import recipeReducer from "reducers/recipeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { persistStore, persistReducer, REHYDRATE } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import storageSession from "redux-persist/lib/storage/session";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        auth: persistReducer({key: "auth", storage: storageSession}, authReducer),
        recipes: recipeReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [REHYDRATE]
        }
      }),
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
