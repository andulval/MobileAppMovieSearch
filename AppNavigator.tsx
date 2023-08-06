import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/routes/home/home.component";
import MainContainer, {
  Movie,
} from "./src/routes/mainContainer/mainContainer.component";
import MovieDetails from "./src/routes/details/details.component";
import FavoriteMovies from "./src/routes/favoritie movies/favoriteMovies.component";
import { IconButton } from "react-native-paper";

export type RootStackParams = {
  Home: undefined; //Specifying undefined means that the route doesn't have params. A union type with undefined (e.g. SomeType | undefined) means that params are optional.
  MainContainer: undefined;
  MovieDetails: Movie;
  FavoriteMovies: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
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
              <IconButton
                icon="heart-outline"
                // iconColor={MD3Colors.error50}
                size={30}
                onPress={() => navigation.navigate("FavoriteMovies")}
              />
            ),
            title: "Movie Search",
            // headerStyle: { backgroundColor: "#fbff00" },
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

export default AppNavigator;
