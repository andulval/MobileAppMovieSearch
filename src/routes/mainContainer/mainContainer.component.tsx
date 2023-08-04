import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInputChangeEventData,
} from "react-native";
import ElementsList from "../../components/elementList/elementsList.component";
import PlainText from "../../components/plainText/plainText.component";
import SearchInput from "../../components/search-input/search-input.component";

import { INIT_MOVIE_DETAILS } from "../../routes/details/details.component";
import {
  useGetSearchMoviesQuery,
  useGetPopularMoviesQuery,
} from "../../utils/services/movie.service";

export type Movie = {
  id: string;
  title: string;
  poster_path: string;
  vote_count: number;
  popularity?: number;
};
export type MovieSearch = {
  results: Movie[];
};

const MainContainer = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const {
    data = { results: [INIT_MOVIE_DETAILS] },
    isLoading,
    isFetching,
    isError,
    error,
  } = searchPhrase
    ? useGetSearchMoviesQuery(searchPhrase)
    : useGetPopularMoviesQuery(); //fetch data using RTK Query -> in no search-input  value -> show popular movies
  const movies = data.results;

  const onSearchChange = (
    // triggered whenever input value change, set newValue to searchPhrase state variable
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const searchFieldString = event.nativeEvent.text; // value.toLocaleLowerCase(); //includes are case senitive
    setSearchPhrase(searchFieldString);
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
    <SafeAreaView style={styles.containerM}>
      <StatusBar animated backgroundColor="#61dafb" hidden={false} />
      <SearchInput
        searchPhrase={searchPhrase}
        placeholder="Search for a Movie"
        onChangeHandler={onSearchChange}
      />
      {searchPhrase && ( //conditionally render text if searchPhrase is !empty
        <PlainText description="Search for: " mainValue={searchPhrase} />
      )}
      {movies.length ? ( //conditionally render text if movies is !empty
        <ElementsList data={movies} />
      ) : (
        <Text>{"No items were found that match your query."}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerM: {
    flex: 1,
    backgroundColor: "#ECF0F1",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginVertical: 8,
    width: "100%",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});

export default MainContainer;
