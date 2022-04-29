import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";
import { collectionGroup, doc, onSnapshot } from "firebase/firestore";
import Header from "../components/Header";
import PostItem from "../components/PostItem";

const Home = ({ navigation }) => {
  const auth = getAuth(app);
  const currentUser = auth.currentUser;
  const [usersArts, setUsersArts] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  const getArts = () => {
    const allArts = [];

    onSnapshot(collectionGroup(db, "arts"), (arts) =>
      arts.docs.forEach((art) => {
        allArts.push(art.data());
      })
    );

    setUsersArts(allArts);
  };

  const getUserDetails = () => {
    const docRef = doc(db, "users", currentUser.uid);

    onSnapshot(docRef, (user) => setUserDetails(user.data()));
  };

  useEffect(() => {
    getUserDetails();
    getArts();
  }, []);

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        {/* <Text style={{ fontSize: 20 }}>Hi! {userDetails?.name}</Text> */}

        {usersArts.map((art) => (
          <PostItem artInfo={art} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 7,
  },
});

export default Home;
