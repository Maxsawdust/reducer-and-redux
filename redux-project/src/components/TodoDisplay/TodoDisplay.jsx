import "./TodoDisplay.css";
import { useSelector } from "react-redux";
import { Todo } from "..";
import { useEffect, useRef } from "react";

export default function TodoDisplay() {
  const todos = useSelector((state) => state.todosReducer.todos);
  const displayRef = useRef();

  useEffect(() => {
    displayRef.current.scrollTop = displayRef.current.scrollHeight;
  });

  return (
    <div className="TodoDisplay" ref={displayRef}>
      <div className="todos">
        {todos.map((todo, index) => {
          return <Todo todo={todo} key={index} />;
        })}
      </div>
    </div>
  );
}
