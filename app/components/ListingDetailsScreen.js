import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

import ListItem from "./ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>White Chair for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/icon.png")}
            title={"Tarun Nahak"}
            subTitle={"6 Listings"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
  userContainer: {
    marginVertical: 40,
  },
});
