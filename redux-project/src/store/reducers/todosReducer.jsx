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
    // reducer to update the state's input as a user inputs things
    receiveInput: (state, action) => {
      state.inputValue = action.payload;
    },

    // this reducer pushed a new Todo item to the state array with content from payload
    addTodo: (state, action) => {
      state.todos.push({
        content: action.payload.content,
        id: getId(),
        completed: false,
      });
      // resetting the input value
      state.inputValue = "";
    },

    // this reducer takes an id as payload
    deleteTodo: (state, action) => {
      /* when delete button is pressed, filter through the todos and generate a new
       array without the selected item */
      const newTodos = state.todos.filter((item) => item.id !== action.payload);
      state.todos = newTodos;
    },

    // checks todos array against id from payload and reverse the 'completed' state
    completeTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    },

    // checks id against todos array and updates the content from inputValue state
    editTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.todoId) {
          return { ...item, content: state.inputValue };
        }
        return item;
      });
      // reset the input value
      state.inputValue = "";
    },
  },
});

export const { receiveInput, addTodo, deleteTodo, editTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
