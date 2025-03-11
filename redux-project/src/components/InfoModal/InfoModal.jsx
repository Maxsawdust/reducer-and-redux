import "./InfoModal.css";

// modal that displays info when the info button is clicked
export default function InfoModal({ handleClick }) {
  return (
    <div className="modal-container">
      <div className="InfoModal">
        <button className="close-button" onClick={() => handleClick(null)}>
          close
        </button>
        <h2>App Information</h2>
        <div className="info-container">
          <p>This is a todo list app!</p>
          <p>
            To add something you need to do to the list, enter it input the
            input box and then press enter, or click <b>Add Todo</b>.
          </p>
          <p>
            You will then be able to <em>complete, edit, or delete</em> this
            todo item using the buttons on the right
          </p>
        </div>
      </div>
    </div>
  );
}
