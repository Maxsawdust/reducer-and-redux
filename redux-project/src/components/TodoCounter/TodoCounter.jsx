import { useSelector } from "react-redux";

export default function TodoCounter() {
  // using selector to get the todos array from state and check it's length
  const todoAmount = useSelector((state) => state.todosReducer.todos.length);
  return (
    <div className="TodoCounter">
      {/* length is displayed in the header */}
      <h2>{todoAmount} left todo!</h2>
    </div>
  );
}
