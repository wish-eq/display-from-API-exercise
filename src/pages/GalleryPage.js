import React from "react";
import { Leftbar } from "../components/leftBar/LeftBar";
import "../App.css";
import Gallery from "../components/galleryPage/Gallery";

function GalleryPage() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <Gallery class="gallery"></Gallery>
      </div>
    </div>
  );
}

export default GalleryPage;
