import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Search_Artists from "../screens/Search_Artists";
import Account_Details from "../screens/Account_Details";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search_Artists" component={Search_Artists} />
    <Tab.Screen name="Account_Details" component={Account_Details} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
