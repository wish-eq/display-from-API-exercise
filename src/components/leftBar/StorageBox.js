import React, { Component } from "react";
import { FaGoogleDrive } from "react-icons/fa";
import { Link } from "react-router-dom";

export class StorageBox extends Component {
  render() {
    return (
      <div className="storage-container flex flex-col justify-start">
        <ul class="option-list">
          <p class="menu-header">Storage</p>
          <Link class="menu-select" to="/onedrive">
            <li class="menu-line">
              <FaGoogleDrive class="icon" />
              OneDrive
            </li>
          </Link>
          <Link class="menu-select" to="/googledrive">
            <li class="menu-line">
              <FaGoogleDrive class="icon" />
              Google Drive
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
export default StorageBox;
