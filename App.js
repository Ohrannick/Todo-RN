import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, Text, Alert } from "react-native";
import { Header } from "./src/Header";
import { TodoForm } from "./src/TodoForm";
import { TodoList } from "./src/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    let repeatTodo = todos.some((todo) => todo.title === title);
    if (!repeatTodo) {
      setTodos((prev) => [
        {
          id: new Date().getTime().toString(),
          title,
          date: new Date().toLocaleTimeString(),
          status: true,
          edit: false,
        },
        ...prev,
      ]);
    } else {
      Alert.alert("Название задачи не может повторяться");
    }
  };

  const deleteTodo = (id, title) => {
    Alert.alert("Удалить задачу?", title, [
      {
        text: "Нет",
        style: "cancel",
      },
      {
        text: "Да",
        onPress: () =>
          setTodos((prev) => prev.filter((todo) => todo.id !== id)),
      },
    ]);
  };

  const statusTodo = (id) => {
    let newTodo = [...todos].filter((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header todo={todos} />
      <TodoForm onTodo={addTodo} />
      {todos.length !== 0 ? (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoList todo={item} onRemove={deleteTodo} onStatus={statusTodo} />
          )}
        />
      ) : (
        <Text>Задачи отсутствуют в списке</Text>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
