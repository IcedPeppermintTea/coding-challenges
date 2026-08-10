import LetterGrid from "./components/LetterGrid";
function App() {
  const arr = ["b", "l", "u", "e"];
  const statuses = ["correct", "present", "absent", "correct"];

  return <LetterGrid array={arr} status={statuses}></LetterGrid>;
}

export default App;
