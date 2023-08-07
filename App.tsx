import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import AppNavigator from "./AppNavigator";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
  },
};

const App = () => {
  //   const isDarkModeOn = [false];
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
