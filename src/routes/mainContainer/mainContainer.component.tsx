import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputChangeEventData,
  StyleSheet,
  View,
} from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import CardList from "../../components/cardList/cardList.component";
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
  const onClearHandler =
    () // triggered whenever input value change, set newValue to searchPhrase state variable
    // e: GestureResponderEvent,
    : void => {
      //const searchFieldString = e.nativeEvent.text; // value.toLocaleLowerCase(); //includes are case senitive
      setSearchPhrase("");
    };

  if (isError) {
    if ("status" in error) {
      return <Text>{error.status}</Text>;
    } //{!!error && <Text>Something went wrong!</Text>}
  }

  return (
    <SafeAreaView style={styles.containerM}>
      <SearchInput
        searchPhrase={searchPhrase}
        placeholder="Search for a Movie"
        onChangeHandler={onSearchChange}
        onClearHandler={onClearHandler}
      />
      {searchPhrase && ( //conditionally render text if searchPhrase is !empty
        <View style={styles.text}>
          <PlainText description="Search for: " mainValue={searchPhrase} />
        </View>
      )}
      {isLoading || isFetching ? (
        <ActivityIndicator
          style={styles.centerItemHV}
          animating={true}
          size="large"
        />
      ) : (
        <CardList data={movies} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerM: {
    flex: 1,
    backgroundColor: "#c3b5a467",
    // marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  centerItemHV: { flex: 1, justifyContent: "center", alignContent: "center" },
  text: { justifyContent: "center", alignItems: "center", marginVertical: 10 },
});

export default MainContainer;
