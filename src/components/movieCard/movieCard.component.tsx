import React from "react";
import { Image, View } from "react-native";
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
        style={{
          marginVertical: 15,
          marginHorizontal: 20,
          flex: 1,
          //   flexDirection: "row",
        }}
      >
        <View
          style={{
            // marginVertical: 15,
            // marginHorizontal: 30,
            flex: 1,
            flexDirection: "row",
            // alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              //   backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                width: 154,
                height: 231,
                marginVertical: 15,
                marginHorizontal: 20,
                borderRadius: 5,
              }}
              source={{ uri: urlImg }}
            />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Text variant="headlineMedium">{title}</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
                // marginHorizontal: 10,
                // alignContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Chip
                // selected={true}
                style={{ justifyContent: "center", alignSelf: "flex-start" }}
                icon="account-group"
                // mode="outlined"
              >
                popularity:
                <Text variant="bodyMedium"> {Math.floor(popularity)}</Text>
              </Chip>

              <ProgressBar animatedValue={0.65} />
              <Chip
                style={{ justifyContent: "center", alignSelf: "flex-start" }}
                icon="vote"
              >
                Votes: {vote_count}
              </Chip>
            </View>
          </View>
        </View>
      </Card>
    </>
  );
};
{
  /* <View style={styles.item}>
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
      </View> */
}
// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: "#36363121",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 25,
//   },
//   container: {
//     width: "80%",
//     height: 200,
//     marginBottom: 25,
//     borderRadius: 15,
//     backgroundColor: "#FFFFFF",
//     overflow: "hidden",
//   },

//   image: {
//     width: "100%",
//     height: "70%",
//   },

//   textContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   text: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
// });

export default MovieCard;
