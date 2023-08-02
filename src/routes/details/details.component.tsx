import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { Image } from "react-native";

type Props = NativeStackScreenProps<RootStackParams, "MovieDetails">;

const MovieDetails = ({ route }: Props) => {
  const { id, title, overview, poster_path, vote_count } = route.params;
  const urlImg = poster_path
    ? `https://image.tmdb.org/t/p/w154/${poster_path}`
    : "https://placehold.co/154x231/png/?text=No\\nImage\\nAvailable"; //if no image - show placeholder

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
        <Text>`overview: {overview && overview}`</Text>
      ) : (
        <Text>No overiew available</Text>
      )}
      <Text>`id: {id}`</Text>
      <Text>`vote_count: {vote_count}`</Text>
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
