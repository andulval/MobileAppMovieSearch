import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../utils/services/base.service";
import { movieReducer } from "./movies/movies.slice";

const reducer = combineReducers({
  // Added API generated reducer
  movies: movieReducer,
  [tmdbApi.reducerPath]: tmdbApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

// Export a hook that can be reused to resolve types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
