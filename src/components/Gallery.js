import React, { useEffect, useState } from "react";

function Gallery() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const allowedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const filteredRecords = records.filter((record) =>
    allowedIds.includes(record.id)
  );
  return (
    <div class="gallery">
      <div class="photo-header-container">
        <p>Photos</p>
      </div>
      <div class="photo-gallery-container">
        <div class="photo-list-container">
          <ul class="photo-list">
            {filteredRecords.map((record) => (
              <li class="photo-container" key={record.id}>
                <img class="photo" src={record.url} alt="Cheetah!" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
