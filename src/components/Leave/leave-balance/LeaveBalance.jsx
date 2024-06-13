import React, { useState, useEffect } from 'react';
import './leaveBalance.css';
import balance from 'components/balance.png';
import casualImg from './casualImg.png';
import sickImg from './sickImg.png';
import paternityImg from './paternityImg.png';
import maternityImg from './maternityImg.png';
import lossOfPayImg from './lossOfPayImg.png';
import bereavementImg from './bereavementImg.png';
import axios from 'axios';

function LeaveBalance() {
  const [leaveBalance, setLeaveBalance] = useState([]);

  useEffect(() => {
    // Fetch leave balance data from the backend when the component mounts
    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const fetchData = async () => {
    try {
      // Make an HTTP GET request to fetch leave balance data from the backend
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/leave/balance`);
      setLeaveBalance(response.data.data); // Extracting the 'data' field from the response
    } catch (error) {
      console.error('Error fetching leave balance:', error);
    }
  };

  // Array of leave categories with associated images
  const leaveCategories = [
    { name: 'Casual Days', image: casualImg },
    { name: 'Sick Days', image: sickImg },
    { name: 'Maternity Days', image: maternityImg },
    { name: 'Paternity Days', image: paternityImg },
    { name: 'Bereavement Days', image: bereavementImg },
    { name: 'Loss of Pay', image: lossOfPayImg },
  ];

  return (
    <div className='leave__history__container loan_list'>
      <h3>
        <img src={balance} alt="" /> LEAVE BALANCE
      </h3>
      <p className='faq-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas dolor saepe necessitatibus deserunt!</p>
      <div className="leaveBalance__box__wrapper">
        {leaveCategories.map((category, index) => (
          <div key={index} className="leaveBalance__box">
            <p className="box__head">{category.name}</p>
            <div className="leave__category">
              <img src={category.image} alt="" />
              <p className="hourLeft">{leaveBalance[category.name] || 0}</p>
            </div>
            <p className="box__hoursAvailable">Hours Available</p>
            <p className="box__hoursScheduled">{leaveBalance.hoursScheduled || 0} Hours scheduled</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaveBalance;
