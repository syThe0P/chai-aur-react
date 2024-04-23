import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let add = () => {
    if (count < 20) {
      count = count + 1;
      setCount(count);
    }
    else{
      alert("Value exceeds 20");
    }
  };
  let dec = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
    else{
      alert("Value gone below than 0")
    }
  };

  return (
    <>
      <h1>React first project</h1>
      <h2>Count : {count}</h2>
      <button onClick={add}>Add</button>
      <br />
      <button onClick={dec}>Dec</button>
    </>
  );
}

export default App;
