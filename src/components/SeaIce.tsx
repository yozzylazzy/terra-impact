import React, { useEffect, useState } from 'react';

const SeaIce: React.FC = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const lon = -95.33; // Longitude contoh
    const lat = 29.78; // Latitude contoh
    const date = '2024-12-01';

    fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=0.1&api_key=${import.meta.env.VITE_NASA_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImage(data.url))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Sea Ice Data</h2>
      {image ? <img src={image} alt="Sea Ice" /> : <p>Loading...</p>}
    </div>
  );
};

export default SeaIce;
