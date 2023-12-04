import React from "react";
import { Leftbar } from "../components/leftBar/LeftBar";
import "../App.css";
import Folder from "../components/folderPage/Folder";

function FoldersPage() {
  return (
    <div className="App">
      <div class="grid-container">
        <Leftbar></Leftbar>
        <Folder></Folder>
      </div>
    </div>
  );
}

export default FoldersPage;
