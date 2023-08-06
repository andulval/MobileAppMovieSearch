import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Movie } from "../../routes/mainContainer/mainContainer.component";
import { Text } from "react-native-paper";
import MovieCard from "../movieCard/movieCard.component";
import { View, StyleSheet } from "react-native";

type cardListProps = { data: Movie[] };

const CardList = ({ data }: cardListProps) => {
  return data.length ? (
    <FlatList
      data={data}
      style={styles.list}
      renderItem={({ item }: ListRenderItemInfo<Movie>) => (
        <MovieCard
          id={item.id}
          title={item.title}
          popularity={item.popularity}
          poster_path={item.poster_path}
          vote_count={item.vote_count}
        />
      )}
      keyExtractor={(movie) => movie.id}
    />
  ) : (
    //conditionally render text if movies is !empty
    <View style={styles.centerHV}>
      <Text variant="bodyMedium">
        {"No items were found that match your query."}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  centerHV: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: { paddingTop: 10 },
});

export default CardList;
