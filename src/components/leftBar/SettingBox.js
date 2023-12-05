import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

export default function SettingBox() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="setting-container flex flex-col justify-start">
      <ul class="option-list">
        <p class="setting menu-line" onClick={toggleModal}>
          <FaAlignJustify class="icon" />
          Settings
        </p>
      </ul>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content flex flex-col  items-center justify-between ">
            <p className="text-xl font-semibold">Setting</p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
