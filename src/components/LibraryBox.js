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

export class LibraryBox extends Component {
  render() {
    return (
      <div class="library-container">
        <ul class="option-list">
          <p class="menu-header menu-line">Library</p>
          <li class="menu-line">
            <FaImage class="icon" />
            <a href="https://stackoverflow.com/questions/27539262/whats-the-difference-between-align-content-and-align-items">
              Photos
            </a>
          </li>
          <li class="menu-line">
            <FaImages class="icon" />
            Albums
          </li>
          <li class="menu-line">
            <FaFolder class="icon" />
            Folders
          </li>
        </ul>
      </div>
    );
  }
}
export default LibraryBox;
