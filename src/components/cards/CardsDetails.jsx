import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardsDetails = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({});
  console.log('api-data-card-details: ', apiData);

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setApiData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [api]);

  // status 
  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "green";
      case "Dead":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: 10 }}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={apiData?.image} className="card-img-top" alt={apiData?.name} />
        <div className="card-body">
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <p
              className="card-status"
              style={{
                backgroundColor: getStatusColor(apiData.status),
                color: 'white',
                padding: 5,
                width: 10,
                borderRadius: "50%",
              }}
            >
            </p>
            <p className=""> {apiData?.status}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {apiData?.name}</li>
            <li className="list-group-item">Gender: {apiData?.gender}</li>
            <li className="list-group-item">Type: {apiData?.type || 'unknown'}</li>
            <li className="list-group-item">Location: {apiData?.location?.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
