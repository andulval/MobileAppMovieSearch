import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const Description = ({ overview = "" }) => {
  return (
    <>
      <Card mode="elevated" elevation={2} style={styles.mainContainer}>
        <View style={styles.insideView}>
          {overview.length !== 0 ? (
            <View style={styles.basicView}>
              <View style={styles.viewRow}>
                <View style={styles.line} />
                <View>
                  <Text variant="labelLarge" style={styles.text}>
                    Description
                  </Text>
                </View>
                <View style={styles.line} />
              </View>
              <Text style={styles.mainText} variant="bodyMedium">
                {overview}
              </Text>
            </View>
          ) : (
            <Text variant="labelLarge">No overview available.</Text>
          )}
        </View>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  insideView: {
    marginVertical: 15,
    marginHorizontal: 30,
    flex: 1,
  },
  line: { flex: 1, height: 1, backgroundColor: "black" },
  mainText: { textAlign: "justify" },
  viewRow: { flexDirection: "row", alignItems: "center" },
  text: { textAlign: "center", paddingHorizontal: 10 },
  basicView: {
    flex: 1,
  },
});

export default Description;
