import React from "react";
import { Leftbar } from "../components/leftBar/LeftBar";
import "../App.css";
import People from "../components/peoplePage/People";

export default function PeoplePage() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <People></People>
      </div>
    </div>
  );
}
