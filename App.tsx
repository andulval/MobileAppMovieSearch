import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/routes/home/home.component";
import MainContainer from "./src/routes/mainContainer/mainContainer.component";
import MovieDetails from "./src/routes/details/details.component";

export type RootStackParams = {
  Home: undefined; //Specifying undefined means that the route doesn't have params. A union type with undefined (e.g. SomeType | undefined) means that params are optional.
  MainContainer: undefined;
  MovieDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
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
          options={{
            title: "Main page",
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            title: "Movie Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
