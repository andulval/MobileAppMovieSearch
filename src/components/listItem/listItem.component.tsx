import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParams } from "../../../MainApp";
import { Movie } from "../../routes/mainContainer/mainContainer.component";

const ListItem = (movie: Movie) => {
  const { title, poster_path, vote_count, popularity } = movie;

  const urlImg = poster_path
    ? `https://image.tmdb.org/t/p/w154/${poster_path}`
    : "https://placehold.co/154x231/png/?text=No\\nImage\\nAvailable"; //if no image - show placeholder

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>(); //useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

  const onPressMovieElement = () => {
    navigation.navigate("MovieDetails", movie); //, { movie }
  };

  return (
    <TouchableOpacity onPress={onPressMovieElement}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text>popularity: {popularity}</Text>
        <Text>vote_count: {vote_count}</Text>
        <Image
          source={{
            uri: urlImg,
          }}
          resizeMode="contain"
          style={{ width: 154, height: 231 }}
        />
      </View>
    </TouchableOpacity>
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

export default ListItem;
