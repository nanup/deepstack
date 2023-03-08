import "./Input.css";

const Input = () => {
  const createTodoHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const todoData = Object.fromEntries(formData.entries());

    sendPostRequest(todoData);
  };

  const sendPostRequest = async (postData) => {
    try {
      const response = await fetch("http://localhost:5000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const responseData = await response.json();

      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={createTodoHandler}>
      <label htmlFor='newTodo'>New To-do</label>
      <input type='text' id='newTodo' name='newTodo' required />
      <button type='submit'>Create To-do</button>
    </form>
  );
};

export default Input;
