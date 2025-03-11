import { useDispatch, useSelector } from "react-redux";
import useInputRef from "../../store/hooks/useInputRef";
import { addTodo } from "../../store/reducers/todosReducer";
import { displayError } from "../../store/reducers/errorReducer";
import { MESSAGES } from "../../utils/messages";
import validateInput from "../../utils/validateInput";

export default function AddButton() {
  const inputRef = useInputRef();
  // input received from state, which is updated as the input changes
  const todoInput = useSelector((state) => state.todosReducer.inputValue);
  const dispatch = useDispatch();

  const handleClick = () => {
    /* check if there's no input, or if the input is empty, then focus the element
        and display the error */
    if (!todoInput || !validateInput(todoInput)) {
      inputRef.current?.focus();
      dispatch(displayError(MESSAGES.EMPTY));
      return;
    }

    // if the input is valid after button press, dispatch the content from input
    dispatch(addTodo({ content: todoInput }));
  };

  return (
    <button className="AddButton" onClick={handleClick}>
      Add Todo
    </button>
  );
}
