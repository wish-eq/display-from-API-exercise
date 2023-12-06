import React, { useEffect, useState } from "react";

export default function GalleryContainer() {
  const [records, setRecords] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const allowedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 25];

  const filteredRecords = records.filter((record) =>
    allowedIds.includes(record.id)
  );

  // modal

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-list-container flex justify-center">
      <ul className="photo-list grid grid-cols-4 grid-rows-3">
        {filteredRecords.map((record) => (
          <li
            className="photo-container flex justify-center items-center"
            key={record.id}
          >
            <img
              className="photo"
              src={record.url}
              alt="img!"
              onClick={() => openModal(record)}
            />
          </li>
        ))}
      </ul>

      {selectedPhoto && (
        <div className="modal">
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal-content flex flex-col items-center justify-between">
            <img
              className="modal-photo filter grayscale-[100%]"
              src={selectedPhoto.url}
              alt="modal-img!"
            />
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
