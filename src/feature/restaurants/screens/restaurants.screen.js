import React, { useContext } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { RestaurantCard } from "../components/restaurant-info-card.styles";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search";
const SafeArea = styled(SafeAreaView)`
  margin-top: ${getStatusBarHeight()}px;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SafeArea>
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
