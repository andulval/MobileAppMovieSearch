import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import { movieReducer } from "./movies/movies.slice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
