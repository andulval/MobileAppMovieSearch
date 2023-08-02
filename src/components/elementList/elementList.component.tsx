import React from "react";
import { FlatList } from "react-native";
import ListItem from "../listItem/listItem.component";
import { Movies } from "../../routes/mainContainer/mainContainer.component";

type ElementListProps = { data: Movies[] };

const ElementList = ({ data }: ElementListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem title={item.title} poster_path={item.poster_path} />
      )}
      keyExtractor={(movie) => movie.id}
    />
  );
};

export default ElementList;
