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
  // errorReducer has a message to be displayed, passed in as payload
  const state = useSelector((state) => state.errorReducer);

  return (
    <div className="App">
      {/* context to share the inputRef with add button, as to implement focusing */}
      <AppContext>
        <header>
          <h1>Redux ToDo App</h1>
          <TodoCounter />
        </header>
        <TodoInput />
        <HeaderButtons />
        <TodoDisplay />
        {state.isDisplayed ? <ErrorModal message={state.message} /> : null}
      </AppContext>
    </div>
  );
}

export default App;
