import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Create_Drawing from "../screens/Create_Drawing";
import Home from "../screens/Home";
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="CreateDrawing" component={Create_Drawing} />
  </Stack.Navigator>
);

export default StackNavigator;
