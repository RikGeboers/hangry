import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/feature/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastucture/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  const SettingsScreen = () => <Text>Settings</Text>;
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{
                tabBarActiveTintColor: "#219CF0",
              }}
            >
              <Tab.Screen
                name="Home"
                component={RestaurantsScreen}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Restaurants"
                component={SettingsScreen}
                options={{
                  tabBarLabel: "Restaurants",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="silverware"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarLabel: "Settings",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="cog"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
