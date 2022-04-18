import { View, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => (
  <View style={{ flex: 1 }}>
    <View style={{ alignItems: "center", paddingTop: 60 }}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/favicon.png")}
      />
    </View>

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

export default CustomDrawer;
