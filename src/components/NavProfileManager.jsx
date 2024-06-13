import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dp from './Picture1.png';
import './navProfile.css';

function NavProfileManager() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/getuser');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-info-wrapper">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {userData && (
        <div className="user-info">
          <div className="user-pic">
            <img src={dp} alt="" />
          </div>
          <div className="user-data">
            <h1>{userData.username}</h1>
            <p>{userData.designation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavProfileManager;
