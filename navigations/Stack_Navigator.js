import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

const Stack_Navigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default Stack_Navigator;
