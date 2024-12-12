import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const APOD: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="apod"
    >
      <div className="apod">
        <h2>Astronomy Picture of the Day</h2>
        <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
        <p><strong>{data.title}</strong></p>
        <p>{data.explanation}</p>
      </div>
    </motion.div>
  );
};

export default APOD;
