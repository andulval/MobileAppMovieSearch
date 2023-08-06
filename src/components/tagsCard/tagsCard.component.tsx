import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Chip } from "react-native-paper";
import { ChipList } from "../chipList/chipList.component";

const TagsCard = ({
  genres = [{ name: "" }],
  production_countries = [{ name: "" }],
}) => {
  return (
    <>
      <Card mode="elevated" elevation={1} style={styles.mainConatiner}>
        <View style={styles.mainView}>
          <View style={styles.columns}>
            <Chip style={styles.chipAlignment} icon="flag" mode="outlined">
              Genres
            </Chip>
            <ChipList elements={genres}></ChipList>
          </View>
          <View style={styles.columns}>
            <Chip
              style={styles.chipAlignment}
              icon="crosshairs-gps"
              mode="outlined"
            >
              Production
            </Chip>
            <ChipList elements={production_countries}></ChipList>
          </View>
        </View>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  columns: { flex: 1, justifyContent: "center" },
  mainView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  chipAlignment: {
    justifyContent: "center",
    alignSelf: "flex-start",
  },
});

export default TagsCard;
