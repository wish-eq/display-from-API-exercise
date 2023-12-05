import React, { Component } from "react";
import { FaAddressBook } from "react-icons/fa";

export class GalleryHeader extends Component {
  render() {
    return (
      <div class="photo-header-container">
        <div class="photo-header-header flex justify-between">
          <div>
            <p class="photo-header">Photos</p>
          </div>
          <div class="header-icon-container">
            <FaAddressBook class="header-icon" size={50} />
          </div>
        </div>
      </div>
    );
  }
}
export default GalleryHeader;
