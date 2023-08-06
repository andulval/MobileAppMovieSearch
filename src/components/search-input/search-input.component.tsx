import React from "react";
import {
  GestureResponderEvent,
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
  onClearHandler: (
    // eslint-disable-next-line no-unused-vars
    e: GestureResponderEvent,
  ) => void;
};

const SearchInput = ({
  searchPhrase,
  placeholder,
  onChangeHandler,
  onClearHandler,
}: SearchBoxProps) => {
  return (
    <Searchbar
      elevation={5}
      style={style.input}
      onChange={onChangeHandler}
      onClearIconPress={onClearHandler}
      value={searchPhrase} // movies.length.toString()
      placeholder={placeholder}
      keyboardType="default"
      searchAccessibilityLabel="movie search"
    />
  );
};

const style = StyleSheet.create({
  input: {
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 20,
  },
});

export default SearchInput;
