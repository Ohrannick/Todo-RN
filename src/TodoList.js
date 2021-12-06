import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const TodoList = ({ todo, onRemove, onStatus }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onStatus(todo.id)}
      onLongPress={() => onRemove(todo.id, todo.title)}
    >
      <View style={s.items}>
        <View style={s.item}>
          <Text style={todo.status ? s.noStatus : s.status}>{todo.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  item: {
    width: "95%",
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 10,
    color: "#666",
    backgroundColor: "papayawhip",
  },
  noStatus: {
    fontSize: 16,
  },
  status: {
    textDecorationLine: "line-through",
    color: "darkred",
    borderColor: "red",
    fontSize: 16,
  },
});
