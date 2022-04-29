import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Create_Drawing from "../screens/Create_Drawing";
import Search_Artists from "../screens/Search_Artists";
import Home from "../screens/Home";
import NewPost from "../screens/NewPost";
import PreviewSelectedArt from "../screens/PreviewSelectedArt";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="NewPost" component={NewPost} />
    <Stack.Screen name="SearchArtists" component={Search_Artists} />
    <Stack.Screen name="CreateDrawing" component={Create_Drawing} />
    <Stack.Screen name="PreviewSelectedArt" component={PreviewSelectedArt} />
  </Stack.Navigator>
);

export default StackNavigator;
