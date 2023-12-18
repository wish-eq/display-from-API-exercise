import React from "react";
import OneDriveContainer from "./OneDriveContainer";
import OneDriveHeader from "./OneDriveHeader";

export default function OneDrive() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <OneDriveHeader></OneDriveHeader>
      <OneDriveContainer></OneDriveContainer>
    </div>
  );
}
