import { useEffect, useState } from "react";
import OrganizationHeader from "components/Utils/OrganizationHeader";
import { tableData } from "./constants";
import "./SessionDetails.css";
import axios from "axios";
import Session from "components/Session.png";



const SessionDetails = () => (
    
  <div className="leave__history__container loan_list">
    <h3><img src={Session} alt="" /> SESSION DETAILS</h3>
    <p className="faq-paragraph"style={{marginLeft:30}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
    voluptas dolor saepe necessitatibus deserunt!
    </p>
    <div className="rounded-table-container">
    <table className="leave__history__table">
      <tr className="table__head">
        <th>S.NO.</th>
        <th>Date</th>
        <th>Session</th>
        <th>Session Timings</th>
        <th>First In</th>
        <th>Late Out</th>
        <th>Late in Hours</th>
        <th>Early Out Hours</th>
      </tr>
      {tableData.map((data) => (
        <tr>
          <td>{data.id}</td>
          <td>{data.date}</td>
          <td>{data.session}</td>
          <td>{data.sessionTimings}</td>
          <td>{data.firstIn}</td>
          <td>{data.LateOut}</td>
          <td>{data.LateinHours}</td>
        </tr>
      ))}
    </table>
    </div>
    <div class="center">
      <div class="pagination">
        {[1, 2, 3, 4, 5, 6, "......"].map((val) => {
          const getClassName = () => {
            if (val === 1) return "active_page";
            if (val === "......") return "more_page";
            return undefined;
          };
          return (
            <a
              href="#"
              style={{ height: 25, width: 25, padding: 6 }}
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

export default SessionDetails;
