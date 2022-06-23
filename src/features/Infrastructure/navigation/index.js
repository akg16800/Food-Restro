import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log("inside index ");
  console.log(isAuthenticated);
  // let flag = true;
  // if (typeof isAuthenticated === "undefined") flag = false;
  // console.log(flag);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};
