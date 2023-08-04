import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Base API service to be used across the application.
 * Endpoints can be injected using the .injectEndpoints method.
 */
export const tmdbApi = createApi({
  reducerPath: "baseApiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    /*
     * This is added to timeout the API in case no response is received in 10s
     */
    timeout: 10000,
  }),
  endpoints: () => ({}),
});
