import React, { useContext } from "react";
import { TouchableOpacity, FlatList } from "react-native";

import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { RestaurantCard } from "../components/restaurant-info-card.styles";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search";
import { SafeArea } from "../../../utils/SafeArea";

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
export const RestaurantsScreen = ({ navigation }) => {
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
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
