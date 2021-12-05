import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = ({ todo }) => {
  return (
    <View style={s.header}>
      <Text style={s.text}>Список задач: {todo.length}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    // backgroundColor: "rgb(114, 172, 172)",
    // height: 50,
    // fontSize: 22,
    // fontWeight: "bold",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 20,
    // marginBottom: 20,
    // borderRadius: 15,
  },
  text: {
    fontSize: 24,
  },
});
