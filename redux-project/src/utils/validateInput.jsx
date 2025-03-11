export default function validateInput(todoInput) {
  if (todoInput.trim() === "") {
    return false;
  }
  return true;
}
