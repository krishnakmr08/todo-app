import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { TodoProvider } from "../context/TodoContext";

const Layout = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(() => [{ id: Date.now(), todo, complete: false }, ...todos]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo));
    });
  };
  const deleteTodo = (id) => {
    setTodos((prev) => {
      prev.filter((todo) => todo.id !== id);
    });
  };
  const toggleCheckbox = (id) => {
    setTodos((prev) => {
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      );
    });
  };

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCheckbox,
      }}
    >
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="addTodo" />
      </Stack>
    </TodoProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({});
