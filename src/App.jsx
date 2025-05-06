import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Movies } from "./Components/Movies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>
          Welcome to <span className="Title">Movie</span> Time....
        </h1>
        <Movies />
      </div>
    </>
  );
}

export default App;
