import React from "react";
import Album from "../components/Album";
import { Leftbar } from "../components/LeftBar";

import "../App.css";

function AlbumPage() {
  return (
    <div className="album">
      <div class="grid-container">
        <Leftbar></Leftbar>
        <Album></Album>
      </div>
    </div>
  );
}

export default AlbumPage;
