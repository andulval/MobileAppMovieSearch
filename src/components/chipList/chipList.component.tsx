import React from "react";
import { View } from "react-native";
import { Chip, Text } from "react-native-paper";

//optional - chips in random colors
//const color = ["#a4daf5c7", "#d3c177c6", "#99fbe5ba", "#ac9bd0ba"];
// const randomColor = () => {
//   let col = color[Math.floor(Math.random() * color.length)];
//   return col;
// };

type chipListProps = { elements: { name: string }[] };

export const ChipList = ({ elements }: chipListProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexWrap: "wrap",
        // justifyContent: "space-evenly",
        alignItems: "flex-start",
      }}
    >
      {elements.map((item, index) => {
        return (
          <View
            style={{
              margin: 3,
            }}
            key={index}
          >
            <Chip
              key={index}
              //   mode="outlined" //changing display mode, default is flat.
              //   height={30} //give desirable height to chip
              //   textStyle={{ color: "white", fontSize: 15 }} //label properties
              //   style={{ backgroundColor: randomColor() }} //display diff color BG
            >
              {/* //display text of clicked chip //item to display in chip label */}
              <Text>{item.name}</Text>
            </Chip>
          </View>
        );
      })}
    </View>
  );
};
