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
      <div class="side-bar">
        <div class="top-side-bar">
          <ProfileBox></ProfileBox>
          <LibraryBox></LibraryBox>
          <CollectionBox></CollectionBox>
        </div>
        <div class="bottom-side-bar">
          <StorageBox></StorageBox>

          <SettingBox></SettingBox>
        </div>
      </div>
    );
  }
}
