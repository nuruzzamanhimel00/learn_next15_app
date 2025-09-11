"use client";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import counterReducer from "./slice/counterSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
