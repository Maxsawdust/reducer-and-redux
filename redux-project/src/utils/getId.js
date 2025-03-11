export default function getId() {
  const id = Number(sessionStorage.getItem("latestId"));
  sessionStorage.setItem("latestId", id + 1);
  return id + 1;
}
