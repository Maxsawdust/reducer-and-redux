import { useDispatch, useSelector } from "react-redux";
import useInputRef from "../../store/hooks/useInputRef";
import { addTodo } from "../../store/reducers/todosReducer";
import { displayError } from "../../store/reducers/errorReducer";
import { MESSAGES } from "../../utils/messages";
import validateInput from "../../utils/validateInput";

export default function AddButton() {
  const inputRef = useInputRef();
  const todoInput = useSelector((state) => state.todosReducer.inputValue);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!todoInput) {
      inputRef.current?.focus();
      return;
    }

    if (!validateInput(todoInput)) {
      dispatch(displayError(MESSAGES.EMPTY));
      return;
    }

    dispatch(addTodo({ content: todoInput }));
  };

  return (
    //
    <button className="AddButton" onClick={handleClick}>
      Add Todo
    </button>
  );
}
