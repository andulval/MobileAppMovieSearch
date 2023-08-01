import React, { ChangeEvent, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Platform,
} from "react-native";
import { getData } from "./src/utils/data.utils";
import Constants from "expo-constants";

const navigationOptions = {
  title: "Welcome",
  headerStyle: { marginTop: Constants.statusBarHeight },
};

export type Movies = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
};

type ItemProps = { title: string; poster_path: string };

const Item = ({ title, poster_path }: ItemProps) => {
  const urlImg = poster_path
    ? "https://image.tmdb.org/t/p/w154/" + poster_path
    : "http://via.placeholder.com/640x360";
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
    </View>
  );
};

const App = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesToFetch = await getData<any>(
        "https://api.themoviedb.org/3/search/movie?query=spiderman&api_key=93118985a38288fb2faca5aa8e1143c8"
      );
      console.log(moviesToFetch.results);
      setMovies(moviesToFetch.results); //.results
    };
    fetchMovies();
  }, []); //fetch data only on component mounting

  const onSearchChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const searchFieldString = event.nativeEvent.text; //value.toLocaleLowerCase(); //includes are case senitive
    setSearchPhrase(searchFieldString); //zapisanie nowej wartosci i wywołanie useState
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={navigationOptions}
        animated={true}
        backgroundColor="#61dafb"
        hidden={false}
        // backgroundColor="#00BCD4"
        // translucent={true}
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />

      <TextInput
        style={styles.input}
        onChange={onSearchChange}
        value={searchPhrase} //movies.length.toString()
        placeholder="Search for a Movie"
        keyboardType="default"
      />

      <Text>Search for: {searchPhrase}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Item title={item.title} poster_path={item.poster_path} /> //{item.title, item.poster_path}
        )}
        keyExtractor={(movie) => movie.id}
      />

      {/* <View style={styles.container}> */}
      <Text>footer</Text>
      {/* {movies.map((element) => {
          return (
            <>
              <Text>{element.title}</Text>
              <Image
                source={{
                  uri: "https://reactnative.dev/docs/assets/p_cat2.png",
                }}
                style={{ width: 200, height: 200 }}
              />
            </>
          );
        })} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F1",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 5,
    marginVertical: 8,
    width: "100%",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#36363121",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
