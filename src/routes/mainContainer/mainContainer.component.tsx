import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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

import fetchMovies, { FETCH_TYPES_TMDB } from "../../utils/fetchTMDB";

export type Movie = {
  id: string;
  title: string;
  poster_path: string;
  vote_count: number;
  popularity?: number;
};

const MainContainer = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    const fetchTMDB = async () => {
      const fetch = await fetchMovies(
        searchPhrase ? FETCH_TYPES_TMDB.search : FETCH_TYPES_TMDB.popular,
        searchPhrase,
      );
      setMovies(fetch);
    };
    fetchTMDB();
  }, [searchPhrase]); // run when searchPhrase changes

  const onSearchChange = (
    // triggered whenever input value change, set newValue to searchPhrase state variable
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const searchFieldString = event.nativeEvent.text; // value.toLocaleLowerCase(); //includes are case senitive
    setSearchPhrase(searchFieldString);
  };

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
