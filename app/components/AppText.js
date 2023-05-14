import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});
