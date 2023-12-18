import React from "react";
import { Leftbar } from "../components/leftBar/LeftBar";
import "../App.css";
import GoogleDrive from "../components/googleDrivePage/GoogleDrive";

export default function GoogleDrivePage() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <GoogleDrive></GoogleDrive>
      </div>
    </div>
  );
}
