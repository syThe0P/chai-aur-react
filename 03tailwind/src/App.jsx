import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card src="https://images.pexels.com/photos/20788950/pexels-photo-20788950/free-photo-of-a-woman-in-a-beige-suit-sitting-in-a-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" name="Pranav" design="SDE-1"/>
      <Card src="https://images.pexels.com/photos/16131605/pexels-photo-16131605/free-photo-of-interior-of-a-restaurant-in-a-rustic-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" name="Hitesh" design="SDE-2"/>
    </>
  );
}

export default App;
