// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of

import { RootState } from "../store";

// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMoviesReducer = (state: RootState) => state.movies; //whole movies store object

export const selectFavMovies = (state: RootState) => state.movies.favMovies; //only movies sub-object of the movies store
