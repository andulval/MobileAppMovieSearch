import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Card, Chip, ProgressBar, Text } from "react-native-paper";
import { RootStackParams } from "../../../AppNavigator";
import { Movie } from "../../routes/mainContainer/mainContainer.component";

const MovieCard = (movie: Movie) => {
  const { title, poster_path, vote_count, popularity = 0 } = movie;

  const urlImg = poster_path
    ? `https://image.tmdb.org/t/p/w154/${poster_path}`
    : "https://placehold.co/154x231/png/?text=No\\nImage\\nAvailable"; //if no image - show placeholder

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>(); //useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

  const onPressMovieElement = () => {
    navigation.navigate("MovieDetails", movie); //, { movie }
  };

  return (
    <>
      <Card
        mode="elevated"
        elevation={3}
        onPress={onPressMovieElement}
        style={styles.mainContainer}
      >
        <View style={styles.rowView}>
          <View style={styles.columnSubView}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: urlImg }}
            />
          </View>
          <View style={styles.sub2View}>
            <View style={styles.sub2View}>
              <Text variant="headlineMedium">{title}</Text>
            </View>
            <View style={styles.wrapedView}>
              <Chip style={styles.chip} icon="account-group">
                <Text variant="labelLarge">
                  Popularity: {Math.floor(popularity)}
                </Text>
              </Chip>

              <ProgressBar animatedValue={0.65} />
              <Chip style={styles.chip} icon="vote">
                <Text variant="labelLarge">Votes: {vote_count}</Text>
              </Chip>
            </View>
          </View>
        </View>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  rowView: {
    flex: 1,
    flexDirection: "row",
  },
  columnSubView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sub2View: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 154,
    height: 231,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  chip: { justifyContent: "center", alignSelf: "flex-start" },
  wrapedView: {
    flex: 1,
    justifyContent: "space-around",
    marginVertical: 10,
    flexWrap: "wrap",
  },
});

export default MovieCard;
