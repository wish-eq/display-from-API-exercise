import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div>
        <test></test>
      </div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.title}
            <img src={list.url} alt="Cheetah!" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
