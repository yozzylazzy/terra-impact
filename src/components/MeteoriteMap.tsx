import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MeteoriteMap: React.FC = () => {
  const [meteorites, setMeteorites] = useState([]);

  useEffect(() => {
    fetch('https://data.nasa.gov/resource/y77d-th95.json')
      .then((response) => response.json())
      .then((data) => setMeteorites(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {meteorites.map((meteorite, idx) => (
        <Marker
          key={idx}
          position={[parseFloat(meteorite.reclat), parseFloat(meteorite.reclong)]}
        >
          <Popup>
            {meteorite.name} - {meteorite.mass} grams
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MeteoriteMap;
