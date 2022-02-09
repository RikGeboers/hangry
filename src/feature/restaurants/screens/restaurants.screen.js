import React from "react";
import { View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
`;
const SearchContainer = styled(View)`
  padding: 16px;
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
