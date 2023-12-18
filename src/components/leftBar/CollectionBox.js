import React, { Component } from "react";
import { FaLocationArrow, FaMemory, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

export class CollectionBox extends Component {
  render() {
    return (
      <div className="collections-container flex flex-col justify-start">
        <ul class="option-list">
          <p class="menu-header">Collections</p>
          <Link class="menu-select" to="/memories">
            <li class="menu-line">
              <FaMemory class="icon" />
              Memories
            </li>
          </Link>
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
    );
  }
}
export default CollectionBox;
