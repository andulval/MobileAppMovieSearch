import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import { getData } from "./src/utils/data.utils";

export type Movies = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
};

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  const [movies, setMovies] = useState<Movies[]>([]);

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

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
      <Text>First paragraph, TITLE</Text>
      <TextInput
        style={styles.input}
        onChangeText={() => {}}
        value={movies.length.toString()}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(movie) => movie.id}
      />
      <View style={styles.container}>
        <Text>Test app. Showing cat!</Text>
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
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#952a3fdd",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#b7ff02",
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
