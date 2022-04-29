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

const Login = ({ navigation }) => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = async () => {
    const result = await logInAsync({
      behavior: "web",
      androidClientId:
        "16187266545-s8p9vvarm1h7hl27eb7r870d8p3jsos7.apps.googleusercontent.com",
      iosClientId:
        "16187266545-0rvk6fo0sme33gjffufltmdcfejcndse.apps.googleusercontent.com",
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

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Don't have any account!</Text>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.push("SignUp")}
        >
          <Text style={styles.bottomBtnText}>Signup</Text>
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

export default Login;
