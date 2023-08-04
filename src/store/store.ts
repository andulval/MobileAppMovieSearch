import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../utils/services/base.service";
import { movieReducer } from "./movies/movies.slice";

const reducer = combineReducers({
  // Added API generated reducer
  movies: movieReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
//   reducer: {
//     movies: movieReducer,
//   },
// });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
