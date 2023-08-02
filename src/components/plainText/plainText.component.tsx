import React from "react";
import { StyleSheet, Text } from "react-native";

type PlainTextProps = {
  description: string;
  mainValue: string;
};

function PlainText({ description, mainValue }: PlainTextProps) {
  return (
    <Text style={style.plainTxt}>
      {description}
      <Text style={style.highligth}>{mainValue}</Text>
    </Text>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  plainTxt: {
    fontSize: 15,
    color: "black",
  },
  highligth: {
    fontSize: 15,
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 2,
    margin: 24,
  },
});

export default PlainText;
