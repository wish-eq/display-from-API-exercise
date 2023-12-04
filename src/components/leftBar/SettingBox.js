import React, { Component } from "react";
import { FaAlignJustify } from "react-icons/fa";

export class SettingBox extends Component {
  render() {
    return (
      <div class="setting-container">
        <ul class="option-list">
          <p class="setting menu-line">
            <FaAlignJustify class="icon" />
            Settings
          </p>
        </ul>
      </div>
    );
  }
}
export default SettingBox;
