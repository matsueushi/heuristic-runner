import "./App.css";
import { api } from "./api";

function invoke() {
  console.log(api.post("test", { n: 1 }));
}

function App() {
  return (
    <>
      <div className="axios">
        <button onClick={() => invoke()}>invoke</button>
      </div>
    </>
  );
}

export default App;
