export default function getId() {
  // gets a new id by adding one to the last generated id
  const id = Number(sessionStorage.getItem("latestId"));
  sessionStorage.setItem("latestId", id + 1);
  return id + 1;
}
