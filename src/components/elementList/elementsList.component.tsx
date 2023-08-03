import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import ListItem from "../listItem/listItem.component";
import { Movie } from "../../routes/mainContainer/mainContainer.component";

type ElementsListProps = { data: Movie[] };

const ElementsList = ({ data }: ElementsListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }: ListRenderItemInfo<Movie>) => (
        <ListItem
          id={item.id}
          title={item.title}
          popularity={item.popularity}
          poster_path={item.poster_path}
          vote_count={item.vote_count}
        />
      )}
      keyExtractor={(movie) => movie.id}
    />
  );
};

export default ElementsList;
