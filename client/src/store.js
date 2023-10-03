import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, REHYDRATE } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import authReducer from "reducers/authSlice";
import recipeReducer from "reducers/recipeSlice";

const persistAuthConfig = {
  key: "auth",
  storage: storageSession
}

const persistAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    recipes: recipeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [REHYDRATE]
    }
  })
});

export const persistor = persistStore(store);
