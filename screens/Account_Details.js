import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Account_Details = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26 }}>Your Accounts Details</Text>
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

export default Account_Details;
