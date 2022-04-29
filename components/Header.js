import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.toggleDrawer()}
    >
      <Text style={styles.title}>DigiArts</Text>
    </TouchableOpacity>

    <View style={styles.rightContainer}>
      <TouchableOpacity onPress={() => navigation.push("SearchArtists")}>
        <Image
          style={styles.searchImg}
          source={{
            uri: "https://img.icons8.com/material-outlined/344/search--v1.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push("NewPost")}>
        <Image
          style={styles.addImg}
          source={{
            uri: "https://img.icons8.com/material-outlined/344/add.png",
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  rightContainer: {
    flexDirection: "row",
  },

  searchImg: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  addImg: {
    width: 30,
    height: 30,
  },
});

export default Header;
