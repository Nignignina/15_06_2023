import "./App.css";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App ">
      <TodoList filterAmount={16} />
      <TodoList filterAmount={36} />
      <TodoList filterAmount={56} />
      {/* <TodoList />
      <TodoList /> */}
    </div>
  );
}

export default App;
