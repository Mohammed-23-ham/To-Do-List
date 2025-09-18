import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  const handelComp = (index) => {
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  }

  const handleAdd = () => {
    const text = inputRef.current.value;
    const newItem = {completed: false, text};
    setToDos([...toDos, newItem]);
    console.log(newItem);
    inputRef.current.value = "";
  };
  const handelDelItem = (index) => {
    const newToDos = [...toDos]; 
    newToDos.splice(index, 1);
    setToDos(newToDos);
  }
  return (
    <div className="App">
      <h2>To Do List</h2>
      <ol>
        {toDos.map((item, index) => {
          return (
            <div className="item">
            <li
              className={item.completed ? "done" : ""}
              onClick={() => handelComp(index)}
              key={item.id ?? index}
            >
              {item.text}
            </li>
            <span onClick={() => handelDelItem(index)}>❌</span>
            </div>
          );
        })}
      </ol>
      <div className="roof">
        <input ref={inputRef} placeholder="Enter Item..." />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default App;
