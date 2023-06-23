import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} q="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} q="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div q={["card", count % 2 === 0 && "--even"]}>
        <button onClick={() => setCount((count) => count + 1)}>
          <span if={count % 2 === 0}>⭐</span>
          count is {count}
          <span if={count % 2 === 1}>⭐</span>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p q="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
