import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import CardList from "../../components/cardList/cardList.component";
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
      {favMovies.length ? ( //conditionally render text if movies is !empty
        <CardList data={favMovies} />
      ) : (
        <View style={styles.viewCenterVH}>
          <Text variant="titleLarge">No items in your favorite list.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerF: {
    flex: 1,
    // backgroundColor: "#1c525f8d",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: 5,
    // marginVertical: 8,
    // width: "100%",
    // marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  viewCenterVH: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default FavoriteMovies;
