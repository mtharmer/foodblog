import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, REHYDRATE } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import authReducer from './reducers/authSlice';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

const persistConfig = {
  key: 'auth',
  storage: storageSession,
  stateReconciler: hardSet
}

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [REHYDRATE]
    }
  })
})

export const persistor = persistStore(store);
