import { createContext } from "react";

const TodoContext = createContext({
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export default TodoContext;
