import React, { Component } from "react";
import { FaGoogleDrive } from "react-icons/fa";

export class StorageBox extends Component {
  render() {
    return (
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
    );
  }
}
export default StorageBox;
