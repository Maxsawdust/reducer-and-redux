import { useDispatch } from "react-redux";
import { closeError } from "../../store/reducers/errorReducer";
import "./ErrorModal.css";

export default function ErrorModal({ message }) {
  const dispatch = useDispatch();
  return (
    <div className="modal-container">
      <div className="ErrorModal">
        <button className="close-button" onClick={() => dispatch(closeError())}>
          close
        </button>
        <h2>ERROR</h2>
        <p className="error-message">{message}</p>
      </div>
    </div>
  );
}
