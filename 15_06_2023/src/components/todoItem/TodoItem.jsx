import "./index.css";

const TodoItem = ({ data }) => {
  return (
    <div className="TodoItem">
      <input
        className="inputItem"
        type="checkbox"
        name="check"
        id="check"
        checked={data.completed}
      />
      <p className="itemText">{data.title}</p>
    </div>
  );
};
export default TodoItem;
