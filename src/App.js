import React from "react";
import Gallery from "./components/galleryPage/Gallery";
import { Leftbar } from "./components/leftBar/LeftBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <Gallery class="gallery"></Gallery>
      </div>
    </div>
  );
}

export default App;
