import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Auth_Navigator from "./navigations/Auth_Navigator";

export default function App() {
  return (
    <View style={styles.container}>
      <Auth_Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888",
  },
});
