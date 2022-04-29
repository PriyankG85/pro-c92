import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const SignUp = ({ navigation }) => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <TextInput
        textContentType="emailAddress"
        style={
          email.length === 0
            ? { ...styles.input, borderColor: "red", borderWidth: 1.7 }
            : !email.includes("@gmail.com")
            ? { ...styles.input, borderColor: "red", borderWidth: 1.7 }
            : styles.input
        }
        onChangeText={(e) => setEmail(e)}
        placeholder={"Your Email"}
      />
      <TextInput
        secureTextEntry
        textContentType="password"
        style={
          password.length === 0
            ? { ...styles.input, borderColor: "red", borderWidth: 1.7 }
            : styles.input
        }
        onChangeText={(e) => setPassword(e)}
        placeholder={"Your Email's Password"}
      />
      <TouchableOpacity
        disabled={email.length === 0 || password.length === 0}
        style={styles.button}
        onPress={logInWithEmail}
      >
        <Text style={styles.buttonText}>Signin</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Already have an account!</Text>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.push("Login")}
        >
          <Text style={styles.bottomBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
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

  bottomTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },

  bottomText: {
    fontSize: 16,
  },

  bottomBtn: {
    paddingLeft: 6,
  },

  bottomBtnText: {
    color: "#4285f4",
  },
});

export default SignUp;
