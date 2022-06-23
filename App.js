import React, { useState, useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import { theme } from "./src/features/Infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/features/Infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBitEha5j2XRAfGffYZ74Ygcf0LKhvraIM",
  authDomain: "mealsapp-c07a1.firebaseapp.com",
  projectId: "mealsapp-c07a1",
  storageBucket: "mealsapp-c07a1.appspot.com",
  messagingSenderId: "872849618170",
  appId: "1:872849618170:web:67fad2b3d71871b49c0543",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const auth = getAuth();
  // useEffect(() => {
  //   setTimeout(() => {
  //     signInWithEmailAndPassword(auth, "abhay@gmail.com", "abhay123")
  //       .then((user) => {
  //         setIsAuthenticated(true);
  //         console.log("Successfully logged in");
  //         console.log(user);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, 2000);
  // });

  const [oswaldlLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldlLoaded || !latoLoaded) return null;
  console.log(StatusBar.currentHeight);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
