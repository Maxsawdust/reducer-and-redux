import "./ModalButton.css";
import { InfoModal, TodoModal } from "..";
import { useState } from "react";

export default function ModalButton({ children, value, id }) {
  // using state to control modals, because it only needs to be accessed by the two modals
  const [modalToDisplay, setModalTodisplay] = useState(null);

  // map to store modals, so the state can display them based on "value"
  const modals = {
    INFO: <InfoModal handleClick={setModalTodisplay} />,
    EDIT: <TodoModal handleClick={setModalTodisplay} id={id} />,
  };

  return (
    //
    <div className="ModalButton">
      <button
        onClick={() => {
          setModalTodisplay(modals[value]);
        }}>
        {children}
      </button>
      {modalToDisplay}
    </div>
  );
}
