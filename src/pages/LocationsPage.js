import React from "react";
import { Leftbar } from "../components/leftBar/LeftBar";
import "../App.css";
import Locations from "../components/locationsPage/Locations";

export default function LocationsPage() {
  return (
    <div className="App">
      <div className="grid grid-cols-[20%,80%] min-h-screen">
        <Leftbar></Leftbar>
        <Locations></Locations>
      </div>
    </div>
  );
}
