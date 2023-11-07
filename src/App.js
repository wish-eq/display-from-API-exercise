import React, { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import { Leftbar } from "./components/LeftBar";

function App() {
  return (
    <div className="App">
      <Leftbar></Leftbar>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
