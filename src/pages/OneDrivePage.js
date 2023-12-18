import React from "react";
import { Leftbar } from "../components/leftBar/LeftBar";
import "../App.css";
import OneDrive from "../components/oneDrivePage/OneDrive";

export default function OneDrivePage() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <OneDrive></OneDrive>
      </div>
    </div>
  );
}
