import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

const NewPost = ({ navigation }) => {
  const uploadLocalArt = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      navigation.push("PreviewSelectedArt", { imgUri: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={uploadLocalArt}>
        <Text style={styles.btnText}>Upload Art's Pic</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push("CreateDrawing")}
      >
        <Text style={styles.btnText}>Create new Drawing</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8e8e4",
  },

  btn: {
    paddingVertical: 4,
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#fff",
    backgroundColor: "#4285f4",
  },

  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NewPost;
