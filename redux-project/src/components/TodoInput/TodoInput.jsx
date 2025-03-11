import { useDispatch, useSelector } from "react-redux";
import { addTodo, receiveInput } from "../../store/reducers/todosReducer";
import { displayError } from "../../store/reducers/errorReducer";
import useInputRef from "../../store/hooks/useInputRef";
import { MESSAGES } from "../../utils/messages";
import validateInput from "../../utils/validateInput";

export default function TodoInput() {
  // using dispatch to update the value of the input on change
  const dispatch = useDispatch();
  // calling my custom hook to get the ref
  const inputRef = useInputRef();
  const input = useSelector((state) => state.todosReducer.inputValue);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!validateInput(input)) {
        dispatch(displayError(MESSAGES.EMPTY));
        return;
      }
      // adding Todo if someone presses enter
      dispatch(addTodo({ content: input }));
    }
  };

  return (
    <input
      type="text"
      placeholder="Enter the content of a new Todo!"
      className="TodoInput"
      ref={inputRef}
      onChange={(e) => {
        dispatch(receiveInput(e.target.value));
      }}
      onKeyDown={handleKeyDown}
      value={input}
    />
  );
}
