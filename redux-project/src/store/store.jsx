import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todosReducer";
import errorReducer from "./reducers/errorReducer";

export const store = configureStore({
  reducer: { todosReducer: todosReducer, errorReducer: errorReducer },
});
