import "./Input.css";

const Input = (props) => {
  const createTodoHandler = (event) => {
    event.preventDefault();
    props.onAdd(event.target);
  };

  return (
    <form className="form" onSubmit={createTodoHandler}>
      <input className="input" type='text' id='newTodo' name='newTodo' required />
      <button className="button" type='submit'>Add To-do</button>
    </form>
  );
};

export default Input;
