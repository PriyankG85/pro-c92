import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";
import AppLoading from "expo-app-loading";
import Drawer_Navigator from "./Drawer_Navigator";
import Stack_Navigator from "./Stack_Navigator";

const Auth_Navigator = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <>
      <NavigationContainer>
        {!user ? <Stack_Navigator /> : <Drawer_Navigator />}
      </NavigationContainer>
    </>
  );
};

export default Auth_Navigator;
