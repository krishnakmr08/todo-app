import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  setTodos : () =>   {},
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (todo, id) => {},
  toggleCheckbox: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

const useTodo = () => useContext(TodoContext);

export default useTodo;
