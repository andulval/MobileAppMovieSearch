import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { RootStackParams } from "../../../App";
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
        <StatusBar animated backgroundColor="#000000" hidden={false} />
        <View style={styles.logoContainer}>
          <LogoIcon style={styles.logo} fill="#eeff00" />
          <Text style={styles.text}>
            Search fo any movie. Make best choice. Enjoy!
          </Text>
        </View>
        <TouchableOpacity onPress={buttonHandler} style={styles.ButonContainer}>
          <Text style={styles.signup}>START</Text>
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
  ButonContainer: {
    // flex: 1,
    // marginTop: 120,
    // alignItems: "center",
    // justifyContent: "center",
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
    marginLeft: "20%",
    marginRight: "20%",
  },
  signup: {
    backgroundColor: "white",
    color: "#0f1639",
    width: "75%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "11%",
    padding: "2%",
    fontSize: 27,
    marginTop: "70%",
  },
});

export default Home;
