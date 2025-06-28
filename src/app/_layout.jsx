import { Stack } from "expo-router";
import { useState } from "react";
import { TodoProvider } from "../context/TodoContext";

const Layout = () => {
  const [todos, setTodos] = useState([]);
  const [editPrevTodo,setEditPrevTodo] =useState(null)
    
  const addTodo = (todo) => {
    setTodos(() => [{ id: Date.now(), todo}, ...todos]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? {id,todo} : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        editPrevTodo,
        setEditPrevTodo
      }}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="addTodo" />
      </Stack>
    </TodoProvider>
  );
};

export default Layout;


