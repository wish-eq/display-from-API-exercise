import React, { Component } from "react";
import profile from "../image/profile.png";

export class ProfileBox extends Component {
  render() {
    return (
      <div class="profile-container">
        <img id="profile-img" src={profile} alt="profile" />
        <p class="name">Wish</p>
        <p class="email">wish.eq@gmail.com</p>
      </div>
    );
  }
}
export default ProfileBox;
