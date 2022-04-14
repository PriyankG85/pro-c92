import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { logInAsync } from "expo-google-app-auth";
import { app } from "../firebase";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = async () => {
    const result = await logInAsync({
      behavior: "web",
      androidClientId: "", // TODO: Provide this!
      iosClientId: "", // TODO: Provide this!
      scopes: ["profile", "email"],
    });

    if (result?.type === "success") {
      const cred = GoogleAuthProvider.credential(
        result.idToken,
        result.accessToken
      );

      signInWithCredential(auth, cred);
    } else {
      Alert.alert("Something went wrong!", "Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.OrText}>Or</Text>

      <TouchableOpacity
        style={styles.googleLoginBtn}
        onPress={logInWithGoogle}
        activeOpacity={0.6}
      >
        <Text style={styles.googleLoginText}>Sign in With Google</Text>
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

  OrText: {
    fontSize: 17,
    paddingTop: 14,
  },

  googleLoginBtn: {
    padding: 6,
    width: "80%",
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: "#4285f4",
    alignItems: "center",
  },

  googleLoginText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;
