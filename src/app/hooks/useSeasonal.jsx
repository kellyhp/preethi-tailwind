import { useState, useEffect } from 'react';

const useSeasonal = () => {
  const [seasonalData, setSeasonalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = require('../_data/seasonal.json');
        setSeasonalData(data);
      } catch (error) {
        console.error('Error fetching seasonal data:', error);
      }
    };

    fetchData();
  }, []);

  return seasonalData;
};

export default useSeasonal;