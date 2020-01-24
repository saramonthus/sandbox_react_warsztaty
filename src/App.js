import React from "react";
import { useState } from "react";
import "./styles.css";

/*browserrouter from ... */
function Welcome({ fname, lname, ...restProps }) {
  return (
    <h1>
      Witaj, {fname} {lname}
    </h1>
  );
}

function Licznik({ initialValue = 0 }) {
  const [value, valueUpdate] = useState(initialValue);
  return (
    <div>
      <button
        onClick={() => {
          valueUpdate(value + 1);
        }}
      >
        Dodaj
      </button>
      <div>Kliknięto: {value} razy</div>
    </div>
  );
}

export default function App() {
  const handleClick = () => {
    console.log("onClick event");
  };

  return (
    <div className="App">
      <Welcome onClick={handleClick} />
      <Licznik initialValue={5} />
    </div>
  );
}

Welcome.defaultProps = {
  fname: "Money",
  lname: "Rules"
};
