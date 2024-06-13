import React, { useState, useEffect } from 'react'
import './leaveHistory.css'
import accepted from './accepted.png'
import { BiSolidDownArrow } from "react-icons/bi";
import axios from 'axios';
import historyleave from "components/historyleave.png";
import LeaveApply from '../leave-apply/LeaveApply';


function LeaveHistory({setHistoryClicked}) {

  const [leaveHistory, setLeaveHistory] = useState([]);


  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const fetchData = async () => {
    try {
      // Make an HTTP GET request to fetch leave history data from the backend
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/leave/history`); 
      setLeaveHistory(response.data.data); // Extracting the 'data' field from the response
    } catch (error) {
      console.error('Error fetching leave history:', error);
    }
  };

  const handleLeaveApplyClick = () => {
    setHistoryClicked(false);
  };


  return (
    < div className='leave__history__container loan_list'>
      <h3> <img src={historyleave} alt="" /> HISTORY</h3>
      <div className="leave__history__header">
          <p className="faq-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
        <div className="leave__history__header">

      <div className="leave__history__filters" style={{ marginTop: '20px' }}>
            <div className="custom-select-wrapper">
              <select name="" id="">
            <option value="">Select Leave Category</option>
            <option value="">Sick Leave</option>
            <option value="">Casual Leave</option>
            </select>
            <div className="custom-select-icon">
              <BiSolidDownArrow className="icon" />
            </div>
            </div>
            <div className="custom-select-wrapper">
        <select name="" id="">
          <option value="">Select Type</option>
          <option value="">2 or less Days</option>
          <option value=""> 5 of less Days</option>
          <option value="">More than 5 Days</option>
        </select>
        <div className="custom-select-icon">
          <BiSolidDownArrow className="icon" />
        </div>
        </div>
      
      
      <button onClick={handleLeaveApplyClick} className='leaveRequest__button'>+Leave Request</button>
      </div> 
      </div>

      <div className="rounded-table-container" style={{ marginTop: 30 }}>
        <table className="leave__history__table">
          <tr className="table__head">
            <th>S.NO.</th>
            <th>Date</th>
            <th>Leave Category</th>
            <th>Sessions</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {leaveHistory.map((leave, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{leave.date}</td>
              <td>{leave.category}</td>
              <td>{leave.sessions}</td>
              <td className={leave.status === 'Accepted' ? 'accepted' : 'pending'}>{leave.status}</td>
              <td>{leave.status === 'Accepted' ? <img className="accepted__img" src={accepted} alt="" /> : '...'}</td>
            </tr>
          ))}
        </table>
      </div>
      <div class="center">
          <div class="pagination">
            <a href="#" className="active_page">
              1
            </a>
            <a href="#" class="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#" className="more_page">
              ....
            </a>
          </div>
        </div>
    </div>
    
  )
}

export default LeaveHistory