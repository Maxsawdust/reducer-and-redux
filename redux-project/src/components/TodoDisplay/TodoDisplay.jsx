import "./TodoDisplay.css";
import { useSelector } from "react-redux";
import { Todo } from "..";
import { useEffect, useRef } from "react";

export default function TodoDisplay() {
  // selector to get the array of todos
  const todos = useSelector((state) => state.todosReducer.todos);
  const displayRef = useRef();

  useEffect(() => {
    // making sure the container is scrolled to the bottom as a new Todo gets addded
    displayRef.current.scrollTop = displayRef.current.scrollHeight;
  });

  return (
    <div className="TodoDisplay" ref={displayRef}>
      <div className="todos">
        {/* mapping through todos array and displaying a Todo component */}
        {todos.map((todo, index) => {
          return <Todo todo={todo} key={index} />;
        })}
      </div>
    </div>
  );
}
