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
      <View style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <LogoIcon style={styles.logo} fill="#c3b5a4" />
          <Text variant="headlineSmall" style={styles.text}>
            Search fo any movie.{"\n"}Make best choice.{"\n"}Enjoy!
          </Text>
        </View>
        <View style={styles.butonContainer}>
          <TouchableOpacity onPress={buttonHandler}>
            <Button
              mode="contained"
              dark={true}
              buttonColor="#c3b5a49a"
              style={styles.startButton}
            >
              <Text variant="headlineMedium" style={styles.text}>
                {`Let's begin!`}
              </Text>
            </Button>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingHorizontal: 5,
    // marginVertical: 12,
    // width: "100%",
  },
  startButton: {
    // width: 200,
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  butonContainer: {
    flex: 1,
    marginBottom: 90,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 330,
    height: 100,
    fontSize: 35,
    // marginLeft: "15%",
    // marginTop: "10%",
  },
  text: {
    // fontSize: 25,
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    // marginTop: "-25%",
    // marginBottom: "-25%",
    // marginLeft: "20%",
    // marginRight: "20%",
  },
});

export default Home;
