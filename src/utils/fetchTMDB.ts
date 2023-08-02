import { Movies } from "../../App";
import { getData } from "./data.utils";

export const FETCH_TYPES_TMDB = {
  popular: "/popular?language=en-US&page=1",
  search: "&include_adult=false&language=en-US&page=1",
};

const urlCreationTMDB = (
  fetchType = FETCH_TYPES_TMDB.popular,
  searchPhrase: string = "",
) => {
  const myKey = "&api_key=93118985a38288fb2faca5aa8e1143c8"; // const value
  const searchString = searchPhrase
    ? `search/movie?query=${searchPhrase}`
    : "movie"; // if empty searchPhrase - show popular films
  return `https://api.themoviedb.org/3/${searchString}${fetchType}${myKey}`; // link creation
};

const fetchMovies = async (
  fetchType = FETCH_TYPES_TMDB.popular,
  searchPhrase: string = "",
) => {
  const url = urlCreationTMDB(fetchType, searchPhrase);
  const moviesToFetch = await getData<Movies[]>(url); // fetch
  return moviesToFetch;
};
export default fetchMovies;
