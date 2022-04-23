import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Auth_Navigator from "./navigations/Auth_Navigator";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Auth_Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
