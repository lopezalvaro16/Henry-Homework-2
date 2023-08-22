import "./App.css";
import CardList from "./cardList";

const characters = [
  { id: 1, name: "Harry Potter", house: "Griffindor" },
  { id: 2, name: "Ron Weasley", house: "Griffindor" },
  { id: 3, name: "Draco Malfoy", house: "Slytherin" },
  { id: 4, name: "Hermione Granger", house: "Griffindor" },
];

function App() {
  const clickHandler = () => {
    alert("Hiciste click je");
  };
  return (
    <>
      <div className="app">
        <h1>Mi app de Harry Potter</h1>
        <div>
          <CardList props={characters} clickHandler={clickHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
