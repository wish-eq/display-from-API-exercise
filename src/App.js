import React from "react";
import Gallery from "./components/Gallery";
import { Leftbar } from "./components/LeftBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <Leftbar></Leftbar>
        <Gallery class="gallery"></Gallery>
      </div>
    </div>
  );
}

export default App;
