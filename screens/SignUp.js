import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const SignUp = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>

      <TextInput
        textContentType="emailAddress"
        style={styles.input}
        onChangeText={(e) => setEmail(e)}
        placeholder={"Your Email"}
      />

      <TextInput
        textContentType="password"
        style={styles.input}
        onChangeText={(e) => setPassword(e)}
        placeholder={"Your Email's Password"}
      />

      <TouchableOpacity style={styles.button} onPress={logInWithEmail}>
        <Text style={styles.buttonText}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    marginBottom: 30,
  },

  input: {
    width: "80%",
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 6,
    padding: 8,
    fontSize: 16,
  },

  button: {
    padding: 6,
    width: "35%",
    marginTop: 30,
    borderRadius: 6,
    backgroundColor: "#4285f4",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default SignUp;
