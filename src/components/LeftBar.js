import React, { Component } from "react";
import {
  FaLocationArrow,
  FaImage,
  FaImages,
  FaFolder,
  FaMemory,
  FaUserFriends,
  FaGoogleDrive,
  FaAlignJustify,
} from "react-icons/fa";

import ProfileBox from "./ProfileBox";
import LibraryBox from "./LibraryBox";

export class Leftbar extends Component {
  render() {
    return (
      <div class="side-bar">
        <div class="top-side-bar">
          <ProfileBox></ProfileBox>
          <LibraryBox></LibraryBox>
          <div class="collections-container">
            <ul class="option-list">
              <p class="menu-header menu-line">Collections</p>
              <li class="menu-line">
                <FaMemory class="icon" />
                Memories
              </li>
              <li class="menu-line">
                <FaUserFriends class="icon" />
                People
              </li>
              <li class="menu-line">
                <FaLocationArrow class="icon" />
                Locations
              </li>
            </ul>
          </div>
        </div>

        <div class="storage-container">
          <ul class="option-list">
            <p class="menu-header menu-line">Storage</p>
            <li class="menu-line">
              <FaGoogleDrive class="icon" />
              OneDrive
            </li>
            <li class="menu-line">
              <FaGoogleDrive class="icon" />
              Google Drive
            </li>
          </ul>
        </div>
        <div>
          <div class="setting-container">
            <ul class="option-list">
              <p class="setting menu-line">
                <FaAlignJustify class="icon" />
                Settings
              </p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
