import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Movie } from "../../routes/mainContainer/mainContainer.component";
import { Text } from "react-native-paper";
import MovieCard from "../movieCard/movieCard.component";

type cardListProps = { data: Movie[] };

const CardList = ({ data }: cardListProps) => {
  return data.length ? (
    <FlatList
      data={data}
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
    <Text>{"No items were found that match your query."}</Text>
  );
};

export default CardList;
