import React from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from "react-native";
import { Searchbar } from "react-native-paper";

type SearchBoxProps = {
  searchPhrase: string;
  placeholder?: string;
  onChangeHandler: (
    // eslint-disable-next-line no-unused-vars
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => void;
};

const SearchInput = ({
  searchPhrase,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <Searchbar
      style={style.input}
      onChange={onChangeHandler}
      value={searchPhrase} // movies.length.toString()
      placeholder={placeholder}
      keyboardType="default"
    />
  );
};

const style = StyleSheet.create({
  input: {
    marginBottom: 5,
    marginTop: 15,
    marginHorizontal: 20,
  },
});

export default SearchInput;
