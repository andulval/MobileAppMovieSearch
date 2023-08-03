import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type favMovieProps = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
  genres: { id: string; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
};
export type favMovieArrayProps = {
  favMovies: favMovieProps[];
};

const moviesInitialState: favMovieArrayProps = {
  favMovies: [],
};

const addMovieToFavorites = (
  moviesInFavorites: favMovieProps[],
  movieToAdd: favMovieProps,
) => {
  // find if cartItems contains productToAdd
  if (moviesInFavorites.length === 0) {
    //empty moviesInFavorites array
    return [movieToAdd];
  }
  const itemExistIndex = moviesInFavorites.find((movies) => {
    //search for movieToAdd
    return movies.id === movieToAdd.id;
  });
  //if found, return the same array
  if (itemExistIndex) return [...moviesInFavorites];
  //otherwise return new array with added element
  return [...moviesInFavorites, movieToAdd];
};
const removeMovieFromFavorites = (
  moviesInFavorites: favMovieProps[],
  movieToRemove: favMovieProps,
) => {
  if (moviesInFavorites.length > 1) {
    // find and remove movieToRemove from moviesInFavorites
    return moviesInFavorites.filter((item) => item.id !== movieToRemove.id);
  }
  //otherwise return empty array
  return [];
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  reducers: {
    addMovies: (state, action: PayloadAction<favMovieProps>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library
      state.favMovies = addMovieToFavorites(state.favMovies, action.payload);
    },
    removeMovies: (state, action: PayloadAction<favMovieProps>) => {
      state.favMovies = removeMovieFromFavorites(
        state.favMovies,
        action.payload,
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const { addMovies, removeMovies } = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;
