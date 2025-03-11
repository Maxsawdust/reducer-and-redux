import { ModalButton, AddButton } from "../../components";
import "./HeaderButtons.css";

export default function HeaderButtons() {
  return (
    <div className="HeaderButtons">
      <ModalButton value={"INFO"}>INFO</ModalButton>
      <AddButton />
    </div>
  );
}
