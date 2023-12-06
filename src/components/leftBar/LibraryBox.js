import React, { Component } from "react";
import { FaImage, FaImages, FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

export class LibraryBox extends Component {
  render() {
    return (
      <div className="library-container flex flex-col justify-start">
        <ul class="option-list">
          <p class="menu-header">Library</p>

          <Link class="menu-select" to="/gallery">
            <li class="menu-line">
              <FaImage class="icon" />
              Photos
            </li>
          </Link>

          <Link class="menu-select" to="/album">
            <li class="menu-line">
              <FaImages class="icon" />
              Albums
            </li>
          </Link>

          <Link class="menu-select" to="/folder">
            <li class="menu-line">
              <FaFolder class="icon" />
              Folders
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
export default LibraryBox;
