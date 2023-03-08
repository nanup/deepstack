import "./TodoListItem.css";

const TodoListItem = (props) => {
  return <li id={props.id}>{props.todoItem}</li>;
};

export default TodoListItem;
