import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";

const Register = () => {
  const currentUser = getAuth(app).currentUser;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");

  const onSubmit = () => {
    const docRef = doc(db, "users", currentUser.uid);

    setDoc(docRef, {
      email: currentUser.email,
      name,
      age,
      gender,
      about,
    });
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
        keyboardType="numeric"
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

      <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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

  btn: {
    width: "80%",
    backgroundColor: "#495057",
    padding: 10,
    borderRadius: 6,
    marginVertical: 30,
  },

  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Register;
