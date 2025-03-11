import { createSlice } from "@reduxjs/toolkit";
import getId from "../../utils/getId";

// initialising the state as two Todo objects
const initialState = {
  todos: [
    { content: "Clean room", id: 1, completed: false },
    { content: "Take out bins", id: 2, completed: false },
  ],
  inputValue: "",
};

// creating todoSlice
const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  // creating reducers to control the todo actions
  reducers: {
    receiveInput: (state, action) => {
      state.inputValue = action.payload;
    },

    addTodo: (state, action) => {
      state.todos.push({
        content: action.payload.content,
        id: getId(),
        completed: false,
      });
      state.inputValue = "";
    },

    deleteTodo: (state, action) => {
      state.todos = action.payload;
    },

    completeTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    },

    editTodo: (state, action) => {},
  },
});

export const { receiveInput, addTodo, deleteTodo, editTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
