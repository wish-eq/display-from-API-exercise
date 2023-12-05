import React from "react";
import Album from "../components/albumPage/Album";
import { Leftbar } from "../components/leftBar/LeftBar";

import "../App.css";

function AlbumPage() {
  return (
    <div className="album">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <Album></Album>
      </div>
    </div>
  );
}

export default AlbumPage;
