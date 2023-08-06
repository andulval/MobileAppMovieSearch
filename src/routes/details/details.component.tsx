import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../AppNavigator";
import { Image, Button } from "react-native";

// import { selectFavMovies } from "../../store/movies/movies.selector";
import { addMovies } from "../../store/movies/movies.slice";
import { useAppDispatch } from "../../store/hooks";
import { useGetDetailMovieQuery } from "../../utils/services/movie.service";
import {
  ActivityIndicator,
  Card,
  Chip,
  ProgressBar,
  Snackbar,
  Text,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParams, "MovieDetails">;

export type MovieDetailsProps = {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
  popularity?: number;
  genres: { id: string; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
};

export const INIT_MOVIE_DETAILS = {
  id: "",
  title: "",
  overview: "",
  poster_path: "",
  vote_count: 0,
  popularity: 100,
  genres: [{ id: "", name: "" }],
  production_countries: [{ iso_3166_1: "", name: "" }],
};

const MovieDetails = ({ route }: Props) => {
  const { id } = route.params; //get movie app to properly fetch data from TMDB API

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const dispatch = useAppDispatch(); //dispatch using Redux RTK
  //   const favMovies = useAppSelector(selectFavMovies); //selectFavMovies using Redux RTK - get favMovies array from Redux store

  const {
    data = INIT_MOVIE_DETAILS,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetDetailMovieQuery(id); //fetch data using RTK Query

  const {
    title,
    overview,
    poster_path,
    vote_count,
    genres,
    production_countries,
    popularity = 100,
  } = data;
  const urlImg = poster_path
    ? `https://image.tmdb.org/t/p/w154/${poster_path}`
    : "https://placehold.co/154x231/png/?text=No\\nImage\\nAvailable"; //if no image - show placeholder

  const onPressAddFavButton = () => {
    setSnackbarVisible(true);
    return dispatch(addMovies(data)); //add new movie to favorite list
  };

  if (isLoading || isFetching) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        animating={true}
        size="large"
      />
    );
  }

  if (isError) {
    if ("status" in error) {
      // console.log({ error });
      return <Text>{error.status}</Text>;
    } //{!!error && <Text>Something went wrong!</Text>}
  }

  return (
    <SafeAreaView
      style={{
        marginVertical: 15,
        marginHorizontal: 20,
        flex: 1,
        // flexDirection: "row",
        // flexWrap: "wrap",
        //   flexDirection: "row",
        // alignContent: "center",
        // justifyContent: "center",
      }}
    >
      <ScrollView>
        <Card
          mode="elevated"
          elevation={3}
          style={
            {
              // flex: 1,
              //   flexDirection: "row",
              //   alignContent: "center",
              //   justifyContent: "center",
            }
          }
        >
          <View
            style={{
              // marginVertical: 15,
              // marginHorizontal: 30,
              flex: 1,
              // alignItems: "center",
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

                  //   backgroundColor: "#771313",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    //   backgroundColor: "#771313",
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
                    style={{
                      justifyContent: "center",
                      alignSelf: "flex-start",
                    }}
                    icon="account-group"
                    // mode="outlined"
                  >
                    popularity:
                    <Text variant="bodyMedium"> {Math.floor(popularity)}</Text>
                  </Chip>

                  <ProgressBar animatedValue={0.65} />
                  <Chip
                    style={{
                      justifyContent: "center",
                      alignSelf: "flex-start",
                    }}
                    icon="vote"
                  >
                    Votes: {vote_count}
                  </Chip>
                </View>
              </View>
            </View>
            {overview.length !== 0 ? (
              <View
                style={{
                  // marginVertical: 15,
                  // marginHorizontal: 30,
                  flex: 1,
                  // alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "black" }}
                  />
                  <View>
                    <Text
                      style={{ textAlign: "center", paddingHorizontal: 10 }}
                    >
                      Description
                    </Text>
                  </View>
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "black" }}
                  />
                </View>
                <Text>{overview}</Text>
              </View>
            ) : (
              <Text>No overview available.</Text>
            )}
          </View>
          <Text>vote_count: {vote_count}</Text>
          <Text>genre:</Text>
          {genres.map((genre) => {
            return <Text key={genre.id}>{genre.name}</Text>;
          })}
          <Text>production_countries:</Text>
          {production_countries.map((production_country) => {
            return (
              <Text key={production_country.iso_3166_1}>
                {production_country.name}
              </Text>
            );
          })}
          <Button
            onPress={onPressAddFavButton}
            title="Add Fav movie"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            // onClose={handleClose}
            // anchorOrigin={ {'10%', '80%' }}
            action={{
              label: "X",
              onPress: () => {
                // Do something
              },
            }}
            // anchorOrigin={{
            //   vertical: "bottom",
            //   horizontal: "center",
            // }}
            // sx={{ position: "absolute" }}
          >
            Movie added to your Favorite list!
          </Snackbar>
        </Card>
      </ScrollView>
      {/* <View style={styles.item}>

        <Text>vote_count: {vote_count}</Text>
        <Text>genre:</Text>
        {genres.map((genre) => {
          return <Text key={genre.id}>{genre.name}</Text>;
        })}
        <Text>production_countries:</Text>
        {production_countries.map((production_country) => {
          return (
            <Text key={production_country.iso_3166_1}>
              {production_country.name}
            </Text>
          );
        })}
        <Button
          onPress={onPressAddFavButton}
          title="Add Fav movie"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {favMovies.map((favMovie) => {
          return <Text key={favMovie.id}>{favMovie.title}</Text>;
        })}
        <Text>vote_count: {vote_count}</Text>
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          // onClose={handleClose}
          // anchorOrigin={ {'10%', '80%' }}
          action={{
            label: "X",
            onPress: () => {
              // Do something
            },
          }}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "center",
          // }}
          // sx={{ position: "absolute" }}
        >
          Movie added to your Favorite list!
        </Snackbar>
      </View> */}
    </SafeAreaView>
  );
};

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
// });

export default MovieDetails;
