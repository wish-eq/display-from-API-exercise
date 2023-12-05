import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

export default function SettingBox() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div class="setting-container">
      {/* <button onClick={toggleModal} className="btn-modal">
        OPEN
      </button> */}
      <ul class="option-list">
        <p class="setting menu-line" onClick={toggleModal}>
          <FaAlignJustify class="icon" />
          Settings
        </p>
      </ul>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <p>Setting</p>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
