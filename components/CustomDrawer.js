import { View, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => (
  <View style={{ flex: 1 }}>
    <View style={{ alignItems: "center", paddingVertical: 20 }}>
      <Image
        style={{ width: "70%", height: "70%" }}
        source={{ uri: require("../assets/favicon.png") }}
      />
    </View>

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

export default CustomDrawer;
