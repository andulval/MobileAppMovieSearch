import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import ElementsList from "../../components/elementList/elementsList.component";
import { useAppSelector } from "../../store/hooks";
import { selectFavMovies } from "../../store/movies/movies.selector";

const FavoriteMovies = () => {
  //   const dispatch = useAppDispatch(); //using Redux RTK
  const favMovies = useAppSelector(selectFavMovies); //selectFavMovies using Redux RTK
  //   const [favMovies, setFavMovies] = useState(favMovies);

  //   const onPressAddFavButton = () => {
  //     return dispatch(addMovies(movie)); //add new movie to favoriet list
  //   };

  return (
    <SafeAreaView style={styles.containerF}>
      <StatusBar animated backgroundColor="#61dafb" hidden={false} />
      {favMovies.length ? ( //conditionally render text if movies is !empty
        <ElementsList data={favMovies} />
      ) : (
        <Text>{"No items in your favorite list."}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerF: {
    flex: 1,
    backgroundColor: "#1c525f8d",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginVertical: 8,
    width: "100%",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});

export default FavoriteMovies;
