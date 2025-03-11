import { useDispatch, useSelector } from "react-redux";
import "./TodoModal.css";
import { editTodo, receiveInput } from "../../store/reducers/todosReducer";
import { displayError } from "../../store/reducers/errorReducer";
import { MESSAGES } from "../../utils/messages";
import { useContext } from "react";
import { IdContext } from "../Todo/Todo";
import validateInput from "../../utils/validateInput";

export default function TodoModal({ handleClick }) {
  const todosState = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  // getting the current todo from context
  const todo = useContext(IdContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check that the edit box isn't empty
    if (!validateInput(e.target[0].value)) {
      dispatch(displayError(MESSAGES.EMPTY));
      return;
    }
    // dispatch the edit reducer
    dispatch(editTodo({ input: e.target.value, todoId: todo.id }));
    // close the modal
    handleClick(null);
  };

  const handleChange = (e) => {
    // updating the state as the input changes as to reflec the input
    dispatch(receiveInput(e.target.value));
  };

  return (
    <div className="modal-container">
      <div className="TodoModal">
        <button className="close-button" onClick={() => handleClick(null)}>
          close
        </button>
        <h2>Edit Todo Item</h2>
        <form className="edit-input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={todo.content}
            value={todosState.inputValue}
            onChange={handleChange}
          />
          <button>Edit</button>
        </form>
      </div>
    </div>
  );
}
