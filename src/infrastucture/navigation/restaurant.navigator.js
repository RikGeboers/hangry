import react from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../feature/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../feature/restaurants/screens/restaurant-detail.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantsScreen}
        options={{
          headerShown: false,
        }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </RestaurantStack.Navigator>
  );
};
