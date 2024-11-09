import React, { useState, useEffect } from 'react';
import CaseList from '../components/CaseList';
import { fetchCases } from '../services/api';

const HomePage = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const loadCases = async () => {
      try {
        const response = await fetchCases();
        setCases(response.data);
      } catch (error) {
        console.error('Failed to fetch cases', error);
      }
    };

    loadCases();
  }, []);

  return (
    <div>
      <h1>Police Case Management</h1>
      <CaseList cases={cases} />
    </div>
  );
};

export default HomePage;
