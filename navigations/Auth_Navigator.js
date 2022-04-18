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

  const checkUserIsExisting = async (currentUser) => {
    const allUsers = [];

    onSnapshot(collection(db, "users")).then((users) =>
      users.docs.forEach((user) => {
        allUsers.push(user.data().email);

        !allUsers.includes(currentUser.email)
          ? setUserAddedInDb(false)
          : setUserAddedInDb(true);
      })
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      checkUserIsExisting(currentUser);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <>
      <NavigationContainer>
        {!user ? (
          <Stack_Navigator />
        ) : !userAddedInDb ? (
          <Register />
        ) : (
          <Drawer_Navigator />
        )}
      </NavigationContainer>
    </>
  );
};

export default Auth_Navigator;
