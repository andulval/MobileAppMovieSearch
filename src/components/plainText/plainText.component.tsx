import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type PlainTextProps = {
  description: string;
  mainValue: string;
};

function PlainText({ description, mainValue }: PlainTextProps) {
  return (
    <Text variant="labelLarge" style={style.plainTxt}>
      {description}
      <Text variant="labelLarge" style={style.highligth}>
        {mainValue}
      </Text>
    </Text>
  );
}

const style = StyleSheet.create({
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
