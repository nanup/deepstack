import "./Todo.css";

import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <ul className="todolist">
      {props.todoList.map((todoItem) => {
        return (
          <TodoListItem
            onDelete={props.onDelete.bind(null, todoItem._id)}
            key={todoItem._id}
            todoItem={todoItem.todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
