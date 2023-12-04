import React from "react";
import Album from "../components/albumPage/Album";
import { Leftbar } from "../components/leftBar/LeftBar";

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
