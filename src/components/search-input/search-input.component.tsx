import React from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData } from "react-native";

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
    <TextInput
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
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
  },
});

export default SearchInput;
