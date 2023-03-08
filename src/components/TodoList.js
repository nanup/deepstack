import "./Todo.css";

import TodoListItem from "./TodoListItem";

const DUMMY_TODO_LIST = [
  {
    todo: "Lorem Ipsum",
    id: 201,
  },
  {
    todo: "Ormad Tkakdg",
    id: 202,
  },
];

const TodoList = () => {
  return (
    <ul>
      {DUMMY_TODO_LIST.map((todoItem) => {
        return (
          <TodoListItem
            id={todoItem.id}
            key={todoItem.id}
            todoItem={todoItem.todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
