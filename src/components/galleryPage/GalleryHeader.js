import React, { useState } from "react";
import { FaAddressBook } from "react-icons/fa";

export default function GalleryHeader() {
  const [authorModal, setAuthorModal] = useState(false);

  const toggleAuthorModal = () => {
    setAuthorModal(!authorModal);
  };

  return (
    <div class="photo-header-container">
      <div class="photo-header-header flex justify-between">
        <div>
          <p class="photo-header">Photos</p>
        </div>
        <div class="header-icon-container">
          <FaAddressBook
            class="header-icon"
            size={50}
            onClick={toggleAuthorModal}
          />
        </div>
      </div>
      {authorModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleAuthorModal}>
            <div className="author-modal-content flex flex-col  items-center justify-between ">
              <p className="text-xl font-semibold">Author</p>
              <div className="flex flex-col items-center justify-between ">
                <p>👋 Hi! I'm Wish Marukapitak</p>
                <p>you can see me more at</p>
                <a href="https://github.com/wish-eq">
                  https://github.com/wish-eq
                </a>
              </div>
              <button className="close-modal" onClick={toggleAuthorModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
