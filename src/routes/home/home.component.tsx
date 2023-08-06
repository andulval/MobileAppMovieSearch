import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { RootStackParams } from "../../../AppNavigator";
import LogoIcon from "../../components/logoIcon/logoIcon.component";

// type Props = NativeStackScreenProps<RootStackParams>;//React.FC<Props>

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>(); //useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

  const buttonHandler = () => {
    navigation.navigate("MainContainer");
  };

  return (
    <ImageBackground
      source={require("../../../assets/backgroundInterstellar.jpg")}
      style={styles.background}
    >
      <View>
        <View style={styles.logoContainer}>
          <LogoIcon style={styles.logo} fill="#eeff00" />
          <Text variant="bodyMedium" style={styles.text}>
            Search fo any movie. Make best choice. Enjoy!
          </Text>
        </View>
        <TouchableOpacity onPress={buttonHandler} style={styles.ButonContainer}>
          <Button style={styles.startButton}>START</Button>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    flex: 3,
    marginTop: 120,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginVertical: 12,
    width: "100%",
  },
  startButton: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "transparent",
    borderRadius: 8,
    padding: 5,
    // height: 40,
    borderWidth: 1,
    borderColor: "green",
    // flex: 1,

    // marginTop: 120,
    // alignItems: "center",
    // justifyContent: "center",
  },
  ButonContainer: {
    // flex: 1,
    // marginTop: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
    color: "green",
    // marginLeft: "15%",
    // marginTop: "10%",
  },
  text: {
    fontSize: 25,
    color: "white",
    marginTop: "-25%",
    // marginBottom: "-25%",
    marginLeft: "20%",
    marginRight: "20%",
  },
});

export default Home;
