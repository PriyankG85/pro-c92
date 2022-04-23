import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import StackNavigator from "./StackNavigator";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={StackNavigator} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
