import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";
import React, { useContext, useState, useEffect } from "react";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export function Search() {
  const { keyWord, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keyWord);
  useEffect(() => {
    search(searchKeyWord);
  }, []);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyWord}
        onSubmitEditing={() => search(searchKeyWord)}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
      />
    </SearchContainer>
  );
}
