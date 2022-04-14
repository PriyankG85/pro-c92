import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import Account_Details from "../screens/Account_Details";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const Drawer_Navigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Drawer.Screen name="BottomTabs" component={BottomTabNavigator} />
    <Drawer.Screen name="AccountDetails" component={Account_Details} />
  </Drawer.Navigator>
);

export default Drawer_Navigator;
