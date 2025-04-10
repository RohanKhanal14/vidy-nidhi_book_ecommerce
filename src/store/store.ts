// basically this is a were we configure the store
// store means keeping data in local storage
// so that user can access the data even if he refreshes the page
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; // listeners is used to listen to the actions dispatched
import {
  persistReducer,
  persistStore,
  PAUSE,
  FLUSH,
  REHYDRATE,
  PURGE,
  PERSIST,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./api";
import userReducer from "./slice/userSlice"; // import the user slice

// persist configuration for user
const userPersistConfig = {
  key: "user",
  storage,
  whiteList: ["user", "isLoggedIn", "isEmailVerified"],
}; // persist the user data in local

//wrap reducers with "persist config"

const persistedUserReducer = persistReducer(userPersistConfig, userReducer); // persist the user data in local storage
// persist the user data in local storage

// flow of redux = call action from dispatch - reducer there is action that change state.

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // rtk-query api
    user: persistedUserReducer, // user slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware), // rtk-query middleware
}); // create the store

setupListeners(store.dispatch); // setup listeners for rtk-query

export const persistor = persistStore(store); // create the persistor

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
