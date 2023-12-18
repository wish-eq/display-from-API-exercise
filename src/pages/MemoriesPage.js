import React from "react";
import { Leftbar } from "../components/leftBar/LeftBar";
import "../App.css";
import Memories from "../components/memoriesPage/Memories";

export default function MemoriesPage() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <Memories></Memories>
      </div>
    </div>
  );
}
