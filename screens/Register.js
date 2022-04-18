import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");

  const onSubmit = () => {
    const docRef = getDoc(doc(db, "users"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}
        placeholder="Your Name!"
        placeholderTextColor="#495057"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setAge(e)}
        placeholder="Your Age!"
        placeholderTextColor="#495057"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setGender(e)}
        placeholder="Your Gender!"
        placeholderTextColor="#495057"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setAbout(e)}
        placeholder="About Yourself!"
        placeholderTextColor="#495057"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 23,
    marginBottom: 20,
  },

  input: {
    width: "80%",
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 6,
    padding: 8,
    fontSize: 16,
  },
});

export default Register;
