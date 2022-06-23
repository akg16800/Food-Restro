import React, { useContext } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area";
import { RestarauntNavigator } from "./Restaurant.navigator";
import { MapScreen } from "../../map/screens/map.screeen";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../../services/favourites/favourites-context";
import { LocationContextProvider } from "../../../services/location/location.context";
import { RestarauntContextProvider } from "../../../services/Restaurant-context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestarauntContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestarauntNavigator} />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            // options={{
            //   headerShown: false,
            // }}
          />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestarauntContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
