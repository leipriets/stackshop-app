import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/modalSlice';
import categoryReducer from './reducers/categorySlice';
import userSlice from "./reducers/userSlice";
import { persistedCartSlice } from "./persistence/persistConfig";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    cartSlice: persistedCartSlice,
    userSlice,
    modal: modalReducer,
    category: categoryReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;