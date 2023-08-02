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
import ElementList from "./src/components/elementList/elementList.component";
import PlainText from "./src/components/plainText/plainText.component";
import SearchInput from "./src/components/search-input/search-input.component";

import fetchMovies, { FETCH_TYPES_TMDB } from "./src/utils/fetchTMDB";

export type Movies = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
};

const App = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
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
    <SafeAreaView style={styles.container}>
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
        <ElementList data={movies} />
      ) : (
        <Text>{"No items were found that match your query."}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default App;
