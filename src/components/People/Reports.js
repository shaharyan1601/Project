import React, { useState, useEffect } from "react";
import axios from "axios";
import { tableData } from "./constants";
import report from "components/report.png";

const PeopleReports = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/report`);
        setEmployees(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="leave__history__container loan_list">
      <h3><img src={report} alt="" />EMPLOYEES REPORTS</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div className="rounded-table-container" style={{ marginTop: 20 }}>
        <table className="leave__history__table">
          <thead>
            <tr className="table__head">
              <th>S.NO.</th>
              <th>Employee Name</th>
              <th>BirthDay</th>
              <th>Age</th>
              <th>Employment Date</th>
              <th>Next Service Year In</th>
              <th>Service Length</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.employeeName}</td>
                <td>{data.birthDay}</td>
                <td>{data.age}</td>
                <td>{data.employmentDate}</td>
                <td>{data.nextServiceYearIn}</td>
                <td>{data.serviceLength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="center">
        <div class="pagination">
          {[1, 2, 3, 4, 5, 6, "......"].map((val, index) => {
            const getClassName = () => {
              if (val === 1) return "active_page";
              if (val === "......") return "more_page";
              return undefined;
            };
            return (
              <a
                href="#"
                key={index}
                style={{ height: 35, width: 35, padding: 6 }}
                className={getClassName()}
              >
                {val}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PeopleReports;
