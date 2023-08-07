import { ScrollView, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../AppNavigator";

import { addMovies } from "../../store/movies/movies.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetDetailMovieQuery } from "../../utils/services/movie.service";
import {
  ActivityIndicator,
  IconButton,
  Snackbar,
  Text,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectFavMovies } from "../../store/movies/movies.selector";
import MovieCard from "../../components/movieCard/movieCard.component";
import Description from "../../components/description/description.component";
import TagsCard from "../../components/tagsCard/tagsCard.component";

type Props = NativeStackScreenProps<RootStackParams, "MovieDetails">;

export type MovieDetailsProps = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
  popularity?: number;
  genres: { id: string; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
};

export const INIT_MOVIE_DETAILS = {
  id: "",
  title: "",
  overview: "",
  poster_path: "",
  vote_count: 0,
  popularity: 100,
  genres: [{ id: "", name: "" }],
  production_countries: [{ iso_3166_1: "", name: "" }],
};

const MovieDetails = ({ route }: Props) => {
  const { id } = route.params; //get movie app to properly fetch data from TMDB API

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [isInFavList, setIsInFavList] = useState(false);

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
    popularity = 100,
  } = data;

  useEffect(() => {
    //check if this movie isnt in the fav list
    const itemsInFavList = favMovies.some((movie) => movie.id === id);

    if (itemsInFavList) {
      setIsInFavList(true);
    } else {
      setIsInFavList(false);
    }
  }, [favMovies]);

  const onPressAddFavButton = () => {
    const itemsInFavList = favMovies.some((movie) => movie.id === id);
    if (!itemsInFavList) {
      //if this movie isnt in the fav list
      setIsInFavList(true);
      setSnackbarVisible(true);
      return dispatch(addMovies(data)); //add new movie to favorite list
    }
    setIsInFavList(true);
  };

  if (isLoading || isFetching) {
    //during loading show spindle
    return (
      <ActivityIndicator
        style={styles.viewCenterVH}
        animating={true}
        size="large"
      />
    );
  }

  if (isError) {
    //if error occur show error page
    if ("status" in error) {
      // console.log({ error });
      return <Text style={styles.viewCenterVH}>{error.status}</Text>;
    } //{!!error && <Text>Something went wrong!</Text>}
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <MovieCard
          id={id}
          title={title}
          popularity={popularity}
          poster_path={poster_path}
          vote_count={vote_count}
        />
        <Description overview={overview}></Description>
        <TagsCard genres={genres} production_countries={production_countries} />

        <View style={styles.favButton}>
          <IconButton
            icon="heart"
            mode="contained-tonal"
            size={30}
            onPress={onPressAddFavButton}
            disabled={isInFavList}
          />
        </View>
      </ScrollView>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: "Close",
        }}
      >
        Movie added to your Favorite list!
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#c3b5a44e",
  },
  scroll: {
    flex: 1,
    paddingTop: 5,
  },
  viewCenterVH: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  favButton: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default MovieDetails;
