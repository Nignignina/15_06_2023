import "./index.css";
import { useState } from "react";

import { array } from "../../array/array.js";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ filterAmount }) => {
  const [todoList, setTodoList] = useState(
    array.filter((todo) => todo.title.length <= filterAmount)
  );
  return (
    <div className="TodoList">
      <div className="dataTodo">
        <h2> Filtrata per {filterAmount} </h2>
        <p>{todoList.length}</p>
      </div>
      <hr />

      {todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
