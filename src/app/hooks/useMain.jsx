import { useState, useEffect } from 'react';

const useMain = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const main = require('../_data/main.json');
        setMainData(main);
      } catch (error) {
        console.error('Error fetching seasonal data:', error);
      }
    };

    fetchData();
  }, []);

  return mainData ;
};

export default useMain;