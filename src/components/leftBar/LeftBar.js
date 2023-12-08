import React, { Component } from "react";
// import {
//   FaLocationArrow,
//   FaImage,
//   FaImages,
//   FaFolder,
//   FaMemory,
//   FaUserFriends,
//   FaGoogleDrive,
//   FaAlignJustify,
// } from "react-icons/fa";

import ProfileBox from "./ProfileBox";
import LibraryBox from "./LibraryBox";
import CollectionBox from "./CollectionBox";
import StorageBox from "./StorageBox";
import SettingBox from "./SettingBox";

export class Leftbar extends Component {
  render() {
    return (
      <div className="side-bar flex flex-col justify-between bg-[#f4f2f8ad]">
        <div class="top-side-bar">
          <ProfileBox></ProfileBox>
          <LibraryBox></LibraryBox>
          <CollectionBox></CollectionBox>
        </div>
        <div className="bottom-side-bar flex flex-col justify-between">
          <StorageBox></StorageBox>

          <SettingBox></SettingBox>
        </div>
      </div>
    );
  }
}
