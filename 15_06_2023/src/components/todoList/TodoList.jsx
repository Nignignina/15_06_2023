import "./index.css";
import { useState } from "react";

import { array } from "../../array/array.js";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ filterAmount }) => {
  const [todoList, setTodoList] = useState(array.filter((todo) => todo));

  const changeValue = () => {
    setTodoList(array.filter((todo) => todo.title.length <= filterAmount));
  };

  const resetValue = () => {
    setTodoList(array.filter((todo) => todo));
  };
  return (
    <div className="TodoList">
      <div className="dataTodo">
        <div className="buttonWrapp">
          <p className="filter">Filter</p>
          <button className="Button" onClick={changeValue}>
            {" "}
            Characters n° {filterAmount}
          </button>
          <button className="Button" onClick={resetValue}>
            {" "}
            Showall
          </button>
        </div>
        <div className="total">
          <p> Total:</p>
          <p className="num"> {todoList.length}</p>
        </div>
      </div>
      <hr />

      {todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
