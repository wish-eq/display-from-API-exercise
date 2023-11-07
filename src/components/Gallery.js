import React, { useEffect, useState } from "react";

function Gallery() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const allowedIds = [1, 2, 4];

  const filteredRecords = records.filter((record) =>
    allowedIds.includes(record.id)
  );
  return (
    <div>
      <ul>
        {filteredRecords.map((record) => (
          <li id="each" key={record.id}>
            {record.id} | {record.title}
            <img src={record.url} alt="Cheetah!" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
