import { Movie } from "../routes/mainContainer/mainContainer.component";
import { MovieDetailsProps } from "../routes/details/details.component";
import { getData } from "./data.utils";

export const FETCH_TYPES_TMDB = {
  popular: "/popular?language=en-US&page=1",
  search: "&include_adult=false&language=en-US&page=1",
  details: "?language=en-US",
};
const myKey = "&api_key=93118985a38288fb2faca5aa8e1143c8"; // const value

const urlCreationTMDB = (
  //creates url for TMDB API with provided arguments and type of action
  fetchType = FETCH_TYPES_TMDB.popular,
  searchPhrase: string = "",
) => {
  const searchString = searchPhrase
    ? `search/movie?query=${searchPhrase}`
    : "movie"; // if empty searchPhrase - show popular films
  return `https://api.themoviedb.org/3/${searchString}${fetchType}${myKey}`; // link creation
};

const fetchMovies = async (
  //fetch data for provided string and GET from TMDB
  fetchType = FETCH_TYPES_TMDB.popular,
  searchPhrase: string = "",
) => {
  const url = urlCreationTMDB(fetchType, searchPhrase);
  const moviesToFetch = await getData<{ results: Movie[] }>(url); // fetch
  return moviesToFetch.results;
};

// https://api.themoviedb.org/3/movie/157336?language=en-US&api_key=93118985a38288fb2faca5aa8e1143c8
export const fetchMovieDetail = async (
  fetchType = FETCH_TYPES_TMDB.details,
  movieId: string,
) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}${fetchType}${myKey}`;
  //   console.log("url", url);
  const moviesToFetch = await getData<MovieDetailsProps>(url); // fetch
  //   console.log("fetchMovieDetail", moviesToFetch);
  return moviesToFetch;
};

export default fetchMovies;
