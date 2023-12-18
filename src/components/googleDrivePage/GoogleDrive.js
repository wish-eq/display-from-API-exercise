import React from "react";
import GoogleDriveContainer from "./GoogleDriveContainer";
import GoogleDriveHeader from "./GoogleDriveHeader";

function GoogleDrive() {
  return (
    <div class="gallery grid grid-rows-[20vh,80vh] h-screen">
      <GoogleDriveHeader></GoogleDriveHeader>
      <GoogleDriveContainer></GoogleDriveContainer>
    </div>
  );
}

export default GoogleDrive;
