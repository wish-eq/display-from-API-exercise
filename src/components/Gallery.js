import React, { useEffect, useState } from "react";

function Gallery() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const allowedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const filteredRecords = records.filter((record) =>
    allowedIds.includes(record.id)
  );
  return (
    <div class="gallery">
      <div class="photo-header">
        <p>Photos</p>
      </div>
      <div class="photo-gallery">
        <ul class="photo-list">
          {filteredRecords.map((record) => (
            <li key={record.id}>
              <img class="photo" src={record.url} alt="Cheetah!" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
