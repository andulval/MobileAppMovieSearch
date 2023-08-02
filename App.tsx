import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/routes/home/home.component";
import MainContainer from "./src/routes/mainContainer/MainContainer";

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
