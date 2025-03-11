import "./Todo.css";
import { ModalButton } from "..";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteTodo } from "../../store/reducers/todosReducer";
import { createContext, useEffect, useRef } from "react";

export const IdContext = createContext();

export default function Todo({ todo }) {
  // selector to get the array
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();
  const checkboxRef = useRef(null);

  const handleClick = () => {
    /* when delete button is pressed, filter through the todos and generate a new
       array without the selected item */
    const newTodos = todos.filter((item) => item.id !== todo.id);
    dispatch(deleteTodo(todo.id));
  };

  /* There was a bug where if you completed a Todo, then deleted it, then the 
     Todo beneath it would be checked. This useEffect statement prevents that*/
  useEffect(() => {
    if (!todo.completed) {
      checkboxRef.current.checked = false;
    }
  }, [todos]);

  return (
    // manipulating the className so that the element changes upon completion
    <div className={todo.completed ? "Todo completed-todo" : "Todo"}>
      <h3 className="todo-content">{todo.content}</h3>
      <div className="todo-buttons">
        <div className="checkbox-container">
          <label>Complete Todo</label>
          <input
            type="checkbox"
            ref={checkboxRef}
            // completing the todo on change
            onChange={() => dispatch(completeTodo(todo))}
            className="complete"
          />
        </div>
        <IdContext.Provider value={todo}>
          <ModalButton value={"EDIT"}>Edit</ModalButton>
        </IdContext.Provider>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
