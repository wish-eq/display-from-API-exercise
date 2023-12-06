import React from "react";
import Gallery from "./components/galleryPage/Gallery";
import { Leftbar } from "./components/leftBar/LeftBar";
import "./App.css";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <Gallery class="gallery"></Gallery>
      </div>
      {/* <Link to="/welcome">click welcome</Link> */}
    </div>
  );
}

export default App;
