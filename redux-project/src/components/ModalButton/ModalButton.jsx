import "./ModalButton.css";
import { InfoModal, TodoModal } from "..";
import { useContext, useState } from "react";
import { IdContext } from "../Todo/Todo";

export default function ModalButton({ children, value }) {
  // using state to control modals, because it only needs to be accessed by the two modals
  const [modalToDisplay, setModalTodisplay] = useState(null);

  const todo = useContext(IdContext);

  // map to store modals, so the state can display them based on "value"
  const modals = {
    INFO: <InfoModal handleClick={setModalTodisplay} />,
    // id passed in to control which Todo to edit
    EDIT: <TodoModal handleClick={setModalTodisplay} />,
  };

  return (
    <div className="ModalButton">
      <button
        onClick={() => {
          console.log(todo);
          // making sure the user can't edit if the todo is complete
          if (value === "EDIT" && todo.completed) {
            return;
          } else {
            setModalTodisplay(modals[value]);
          }
        }}>
        {children}
      </button>
      {modalToDisplay}
    </div>
  );
}
