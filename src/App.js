import "./App.css";

import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='todo__container'>
      <TodoList />
      <Input />
    </div>
  );
}

export default App;
