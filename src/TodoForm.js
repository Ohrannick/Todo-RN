import React from "react";
import { useState } from "react";
import { View, Button, StyleSheet, TextInput, Alert } from "react-native";

export const TodoForm = ({ onTodo }) => {
  const [value, setValue] = useState("");

  const pressButton = () => {
    if (value.trim()) {
      onTodo(value);
      setValue("");
    } else {
      Alert.alert("Название задачи не может быть пустой");
    }
  };

  return (
    <View style={s.inputForm}>
      <TextInput
        style={s.input}
        placeholder="Введите задачу..."
        onChangeText={setValue}
        value={value}
        autoFocus={true}
        autoCapitalize="none"
      />
      <Button style={s.btn} title="Добавить" onPress={pressButton} />
    </View>
  );
};
const s = StyleSheet.create({
  inputForm: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
  },
  btn: {},
});

// const saveTodo = () => {
//   let repeatTodo = todo.some((item) => item.title === value);
//   if (repeatTodo) {
//     setPlholder("---- Введите уникальную задачу ----");
//   } else if (value && !repeatTodo) {
//     setTodo(
//       [
//         ...todo,
//         {
//           id: new Date().getTime(),
//           title: value,
//           date: new Date().toLocaleTimeString(),
//           status: true,
//         },
//       ],
//       setPlholder("Введите наименование задачи...")
//     );
//   }
//   setValue("");
// };
