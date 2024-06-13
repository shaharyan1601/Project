import React, { useState, useEffect }   from "react";
import { FaRegFileAlt } from "react-icons/fa";
import of from "components/of.png";
import axios from "axios";


export default function HiringOffBoarding() {
  const [onboardData, setOnboardData] = useState([]);

  useEffect(() => {
    const fetchOnboardData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/hiring/offboarding'); // Adjust the URL based on your setup`)
        setOnboardData(response.data.data);
      } catch (error) {
        console.error('Error fetching onboarding data:', error);
      }
    };

    fetchOnboardData();
  }, []);

  return (
    <div className="hiring-employee-list">
      <div className="flex">
        <div className="employee-list-title">
          <h3><img src={of} alt="" /> OFF BOARDING EMPLOYEE LIST</h3>
          <p classname="faq-paragraph"style={{marginLeft :30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>
      <div className="rounded-table-container">
      <table className="leave__history__table">
        <tr className="table__head">
          <th>Employee Name</th>
          <th>Off Boarding Date</th>
          <th>Reason For Off Boarding</th>
        </tr>
        {onboardData.map((data) => (
          <tr key={data.id}>
            <td>{data.employeeName}</td>
            <td>{data.offBoardingDate}</td>
            <td>{data.reason}</td>
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
  );
}
