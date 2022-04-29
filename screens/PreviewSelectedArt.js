import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const PreviewSelectedArt = ({ navigation, route }) => {
  const imgUri = route.params.imgUri;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e4",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default PreviewSelectedArt;
