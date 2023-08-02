import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieDetails = () => {
  return (
    <View>
      <Text style={styles.text}>MovieDetails here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "red",
  },
});

export default MovieDetails;
