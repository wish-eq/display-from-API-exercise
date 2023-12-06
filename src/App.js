import React from "react";
import Gallery from "./components/galleryPage/Gallery";
import { Leftbar } from "./components/leftBar/LeftBar";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="welcome-container flex flex-col items-center justify-center">
        <div class="welcome-text">
          <Link to="/gallery">Welcome.</Link>
        </div>
        <div>
          <Link to="/gallery" class="welcome-btn">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
