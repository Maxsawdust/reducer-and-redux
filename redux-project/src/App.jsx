import { useSelector } from "react-redux";
import "./App.css";
import {
  HeaderButtons,
  TodoCounter,
  TodoDisplay,
  TodoInput,
  ErrorModal,
} from "./components";
import AppContext from "./store/context/AppContext";

/* setting this to sessionStorage by default, because of the two default Todo items */
sessionStorage.setItem("latestId", 2);

function App() {
  const state = useSelector((state) => state.errorReducer);

  console.log(state);

  return (
    <div className="App">
      <AppContext>
        <h1>Redux ToDo App</h1>
        <TodoCounter />
        <TodoInput />
        <HeaderButtons />
        <TodoDisplay />
        {state.isDisplayed ? <ErrorModal message={state.message} /> : null}
      </AppContext>
    </div>
  );
}

export default App;
