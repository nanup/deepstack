import "./TodoListItem.css";

const TodoListItem = (props) => {
  return (
    <div className="todolistitem">
      <li className="todo" key={props._id}>{props.todoItem}</li>
      <button className="delete" onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default TodoListItem;
