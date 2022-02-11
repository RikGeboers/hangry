import React from "react";
import { View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>

    <RestaurantInfoCard />
  </SafeArea>
);
