import "./App.css";
import TodoList from "./components/todoList";
import { array } from "./array/array.js";

function App() {
  return (
    <div className="App ">
      eccola
      <TodoList filterAmount={16} />
      <TodoList filterAmount={36} />
      <TodoList filterAmount={56} />
      {/* <TodoList />
      <TodoList /> */}
    </div>
  );
}

export default App;
