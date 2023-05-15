import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D4",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "T5",
    description: "D6",
    image: require("../assets/chair.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
