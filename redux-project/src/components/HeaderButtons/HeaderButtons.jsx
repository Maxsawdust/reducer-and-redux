import { ModalButton, AddButton } from "../../components";
import "./HeaderButtons.css";

{
  /* container to hold buttons */
}
export default function HeaderButtons() {
  return (
    <div className="HeaderButtons">
      <ModalButton value={"INFO"}>INFO</ModalButton>
      <AddButton />
    </div>
  );
}
