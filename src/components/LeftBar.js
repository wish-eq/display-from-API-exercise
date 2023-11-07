import React, { Component } from "react";
import profile from "../image/profile.png";

export class Leftbar extends Component {
  render() {
    return (
      <div class="side-bar">
        <div class="profile-container">
          <img id="profile-img" src={profile} alt="profile" />
          <p class="name">Wish</p>
          <p class="email">wish.eq@gmail.com</p>
        </div>
        <div class="library-container">
          <ul class="option-list">
            <p class="list-header">Library</p>
            <li>Photos</li>
            <li>Albums</li>
            <li>Folders</li>
          </ul>
        </div>
        <div class="collections-container">
          <ul class="option-list">
            <p class="list-header">Collections</p>
            <li>Memories</li>
            <li>People</li>
            <li>Locations</li>
          </ul>
        </div>
        <div class="storage-container">
          <ul class="option-list">
            <p class="list-header">Storage</p>
            <li>OneDrive</li>
            <li>Google Drive</li>
          </ul>
        </div>
        <div class="setting-container">
          <ul class="option-list">
            <p class="setting">Settings</p>
          </ul>
        </div>
      </div>
    );
  }
}
