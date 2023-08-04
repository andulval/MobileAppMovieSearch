import { tmdbApi } from "./base.service";
import { MovieDetailsProps } from "../../routes/details/details.component";

const MY_TMDB_KEY = "&api_key=93118985a38288fb2faca5aa8e1143c8"; // const value
const MOVIES_TAG = ["MOVIES", "POPULAR_MOVIES", "SEARCH_MOVIES"];

export type getMoviesProps = { results: MovieDetailsProps[] };
/**
 * Service to fetch data from the API for an endpoint.
 */
const movieApi = tmdbApi
  .enhanceEndpoints({
    // Used for caching and invalidating data
    addTagTypes: [...MOVIES_TAG],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getSearchMovies: build.query<getMoviesProps, string>({
        query: (searchQuery = "") =>
          `search/movie?query=${searchQuery}${MY_TMDB_KEY}`,
        // Provided tag to re-fetch the data if the specified tag is invalidated.
        providesTags: [MOVIES_TAG[0]],
      }),
      getPopularMovies: build.query<getMoviesProps, void>({
        query: () => {
          return `movie/popular?language=en-US&page=1${MY_TMDB_KEY}`;
        },
        // Provided tag to re-fetch the data if the specified tag is invalidated.
        providesTags: [MOVIES_TAG[1]],
      }),
      getDetailMovie: build.query<MovieDetailsProps, string>({
        query: (movie_id = "") => {
          //   console.log("getDetailMovie", "movie_id", movie_id);
          return `movie/${movie_id}?language=en-US${MY_TMDB_KEY}`;
        },
        // Provided tag to re-fetch the data if the specified tag is invalidated.
        providesTags: [MOVIES_TAG[2]],
      }),
    }),
    /**
     * If you inject an endpoint that already exists and doesn't explicitly specify `overrideExisting: true`.
     * The endpoint will not get overridden in development mode but in production, endpoint will be overridden.
     * So to avoid overriding set `overrideExisting: false`.
     */
    overrideExisting: false,
  });

export const {
  useGetSearchMoviesQuery,
  useGetPopularMoviesQuery,
  useGetDetailMovieQuery,
} = movieApi;
