import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../MainApp";
import { Image, Button } from "react-native";

import { selectFavMovies } from "../../store/movies/movies.selector";
import { addMovies } from "../../store/movies/movies.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetDetailMovieQuery } from "../../utils/services/movie.service";

type Props = NativeStackScreenProps<RootStackParams, "MovieDetails">;

export type MovieDetailsProps = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
  genres: { id: string; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
};

export const INIT_MOVIE_DETAILS = {
  id: "",
  title: "",
  overview: "",
  poster_path: "",
  vote_count: 0,
  genres: [{ id: "", name: "" }],
  production_countries: [{ iso_3166_1: "", name: "" }],
};

const MovieDetails = ({ route }: Props) => {
  const { id } = route.params; //get movie app to properly fetch data from TMDB API

  const dispatch = useAppDispatch(); //dispatch using Redux RTK
  const favMovies = useAppSelector(selectFavMovies); //selectFavMovies using Redux RTK - get favMovies array from Redux store

  const {
    data = INIT_MOVIE_DETAILS,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetDetailMovieQuery(id); //fetch data using RTK Query

  const {
    title,
    overview,
    poster_path,
    vote_count,
    genres,
    production_countries,
  } = data;
  const urlImg = poster_path
    ? `https://image.tmdb.org/t/p/w154/${poster_path}`
    : "https://placehold.co/154x231/png/?text=No\\nImage\\nAvailable"; //if no image - show placeholder

  const onPressAddFavButton = () => {
    return dispatch(addMovies(data)); //add new movie to favorite list
  };

  if (isLoading || isFetching) {
    return <Text>Loading.....</Text>;
  }

  if (isError) {
    if ("status" in error) {
      // console.log({ error });
      return <Text>{error.status}</Text>;
    } //{!!error && <Text>Something went wrong!</Text>}
  }

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{
          uri: urlImg,
        }}
        resizeMode="contain"
        style={{ width: 154, height: 231 }}
      />
      {overview.length !== 0 ? (
        <Text>overview: {overview}</Text>
      ) : (
        <Text>No overiew available</Text>
      )}
      <Text>vote_count: {vote_count}</Text>
      <Text>genre:</Text>
      {genres.map((genre) => {
        return <Text key={genre.id}>{genre.name}</Text>;
      })}
      <Text>production_countries:</Text>
      {production_countries.map((production_country) => {
        return (
          <Text key={production_country.iso_3166_1}>
            {production_country.name}
          </Text>
        );
      })}
      <Button
        onPress={onPressAddFavButton}
        title="Add Fav movie"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {favMovies.map((favMovie) => {
        return <Text key={favMovie.id}>{favMovie.title}</Text>;
      })}
      <Text>vote_count: {vote_count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#36363121",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});

export default MovieDetails;
