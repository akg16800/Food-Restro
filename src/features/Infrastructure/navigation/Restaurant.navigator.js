import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { RestaurantsScreen } from "../../Restaraunts/screens/Restaraunt.screen";
import { RestaurantDetailScreen } from "../../Restaraunts/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestarauntNavigator = () => {
  return (
    <RestaurantStack.Navigator
      // headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
