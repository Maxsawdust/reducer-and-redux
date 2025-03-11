import { useDispatch, useSelector } from "react-redux";
import { addTodo, receiveInput } from "../../store/reducers/todosReducer";
import { displayError } from "../../store/reducers/errorReducer";
import useInputRef from "../../store/hooks/useInputRef";
import { MESSAGES } from "../../utils/messages";
import validateInput from "../../utils/validateInput";
import "./TodoInput.css";

export default function TodoInput() {
  // using dispatch to update the value of the input on change
  const dispatch = useDispatch();
  // calling my custom hook to get the ref
  const inputRef = useInputRef();
  // getting inputValue from state as to control the input's value property
  const input = useSelector((state) => state.todosReducer.inputValue);

  // this is necessary because the input isn't in a form
  const handleKeyDown = (e) => {
    // check the key pressed
    if (e.key === "Enter") {
      // if the input is empty, display the errorModal with a message passed in
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
