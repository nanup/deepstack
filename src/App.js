import "./App.css";

import { useEffect, useState } from "react";

import Input from "./components/Input";
import TodoContext from "./store/todo-context";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await fetch("http://localhost:5000/api");
        const responseData = await response.json();

        setTodoList(responseData);
      } catch (err) {
        console.log(err);
      }
    };

    getTodoList();
  }, [todoList]);

  const addTodo = (data) => {
    const formData = new FormData(data);
    const todoData = Object.fromEntries(formData.entries());

    sendPostRequest(todoData);
  };

  const sendPostRequest = async (postData) => {
    try {
      await fetch("http://localhost:5000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/delete/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
      <div className='todo__container'>
        <TodoList todoList={todoList} onDelete={removeTodo} />
        <Input onAdd={addTodo} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
