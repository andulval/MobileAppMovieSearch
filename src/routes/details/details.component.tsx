import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { Image } from "react-native";

import { fetchMovieDetail, FETCH_TYPES_TMDB } from "../../utils/fetchTMDB";

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

const INIT_MOVIE_DETAILS = {
  id: "",
  title: "",
  overview: "",
  poster_path: "",
  vote_count: 0,
  genres: [{ id: "", name: "" }],
  production_countries: [{ iso_3166_1: "1", name: "" }],
};

const MovieDetails = ({ route }: Props) => {
  const { id } = route.params;
  const [movie, setMovie] = useState<MovieDetailsProps>(INIT_MOVIE_DETAILS);

  const {
    title,
    overview,
    poster_path,
    vote_count,
    genres,
    production_countries,
  } = movie;

  const urlImg = poster_path
    ? `https://image.tmdb.org/t/p/w154/${poster_path}`
    : "https://placehold.co/154x231/png/?text=No\\nImage\\nAvailable"; //if no image - show placeholder

  useEffect(() => {
    const fetchMovieD = async () => {
      const fetch = await fetchMovieDetail(FETCH_TYPES_TMDB.details, id);
      setMovie(fetch);
      //   console.log("fetchMovieD", fetch.genres.map((genre)=>));
    };
    fetchMovieD();
  }, []); // run when searchPhrase changes

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
