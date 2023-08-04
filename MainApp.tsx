import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/routes/home/home.component";
import MainContainer, {
  Movie,
} from "./src/routes/mainContainer/mainContainer.component";
import MovieDetails from "./src/routes/details/details.component";
import FavoriteMovies from "./src/routes/favoritie movies/favoriteMovies.component";
import { Button } from "react-native";

export type RootStackParams = {
  Home: undefined; //Specifying undefined means that the route doesn't have params. A union type with undefined (e.g. SomeType | undefined) means that params are optional.
  MainContainer: undefined;
  MovieDetails: Movie;
  FavoriteMovies: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home page",
          }}
        />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={({ navigation }) => ({
            // headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("FavoriteMovies")}
                title="Favorites"
                color="#43134e"
              />
            ),
            headerStyle: { backgroundColor: "#0064c8" },
          })}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            title: "Movie Details",
          }}
        />
        <Stack.Screen
          name="FavoriteMovies"
          component={FavoriteMovies}
          options={{
            title: "Favorite Movies",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
