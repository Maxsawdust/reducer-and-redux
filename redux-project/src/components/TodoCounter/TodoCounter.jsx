import { useSelector } from "react-redux";

export default function TodoCounter() {
  const todoAmount = useSelector((state) => state.todosReducer.todos.length);
  return (
    <div className="TodoCounter">
      <h2>{todoAmount} left todo!</h2>
    </div>
  );
}
