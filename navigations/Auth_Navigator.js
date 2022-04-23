import { SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "../firebase";
import AppLoading from "expo-app-loading";
import Drawer_Navigator from "./Drawer_Navigator";
import Stack_Navigator from "./Stack_Navigator";
import { collection, onSnapshot } from "firebase/firestore";
import Register from "../screens/Register";

const Auth_Navigator = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAddedInDb, setUserAddedInDb] = useState(false);

  const checkUserIsExisting = (currentUser) => {
    const allUsers = [];

    onSnapshot(collection(db, "users"), (users) => {
      users.forEach((user) => {
        allUsers.push(user.data().email);

        !allUsers.includes(currentUser?.email)
          ? setUserAddedInDb(false)
          : setUserAddedInDb(true);
      });

      setLoading(false);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      checkUserIsExisting(currentUser);
    });
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <NavigationContainer>
        {!user ? (
          <Stack_Navigator />
        ) : !userAddedInDb ? (
          <Register />
        ) : (
          <Drawer_Navigator />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Auth_Navigator;
