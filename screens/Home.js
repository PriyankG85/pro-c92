import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { app, db } from "../firebase";
import { getAuth } from "firebase/auth";
import { collectionGroup } from "firebase/firestore";

const Home = () => {
  const currentUser = getAuth(app).currentUser;
  const [usersArts, setUsersArts] = useState([]);

  const getArts = () => {
    const allArts = [];

    onSnapshot(collectionGroup(db, "arts")).then((arts) =>
      arts.docs.forEach((art) => {
        allArts.push(art.data());
      })
    );

    setUsersArts(allArts);
  };

  // const checkUserIsExisting = async () => {
  //   const allUsers = [];

  //   const snapshot = await getDocs(collection(db, "users")).then((users) =>
  //     users.docs.forEach((user) => allUsers.push(user.data().email))
  //   );

  //   if (!allUsers.includes(currentUser.email)) {
  //     // User does not exist in db!

  //     setDoc(doc(db, "users", currentUser.uid), {
  //       email: currentUser.email,
  //       name:
  //         currentUser.displayName === ""
  //           ? currentUser.email.slice(0, currentUser.email.indexOf("@"))
  //           : currentUser.displayName,
  //     });
  //   }
  // };

  useEffect(() => checkUserIsExisting(), []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Hi! {currentUser.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
