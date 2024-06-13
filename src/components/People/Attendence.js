import React, { useState } from "react";
import "./Attendence.css";
// import DetailedPage from "./DetailedPage";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

export default function EmployeeAttendence() {
  const [showDetails, setShowDetails] = useState(false);

  const listData = [
    {
      id: 1,
      title: "Senior UI/UX Designer",
      points: [
        "Full Time",
        "On-site (Hyderabad/Goa)",
        "5-8 years Experience",
        "65k-80k per month",
      ],
      date: "Tue, 22/07/2023",
      day: "(Posted 5 days back)",
      background: "rgb(244, 219, 186)",
    },
    {
      id: 2,
      title: "Senior UI/UX Designer",
      points: [
        "Full Time",
        "On-site (Hyderabad/Goa)",
        "5-8 years Experience",
        "65k-80k per month",
      ],
      date: "Tue, 22/07/2023",
      day: "(Posted 5 days back)",
      background: "rgb(221, 184, 232)",
    },
    {
      id: 3,
      title: "Senior UI/UX Designer",
      points: [
        "Full Time",
        "On-site (Hyderabad/Goa)",
        "5-8 years Experience",
        "65k-80k per month",
      ],
      date: "Tue, 22/07/2023",
      day: "(Posted 5 days back)",
      background: "rgb(187, 231, 187)",
    },
    {
      id: 4,
      title: "Senior UI/UX Designer",
      points: [
        "Full Time",
        "On-site (Hyderabad/Goa)",
        "5-8 years Experience",
        "65k-80k per month",
      ],
      date: "Tue, 22/07/2023",
      day: "(Posted 5 days back)",
      background: "rgb(221, 184, 232)",
    },
    {
      id: 5,
      title: "Senior UI/UX Designer",
      points: [
        "Full Time",
        "On-site (Hyderabad/Goa)",
        "5-8 years Experience",
        "65k-80k per month",
      ],
      date: "Tue, 22/07/2023",
      day: "(Posted 5 days back)",
      background: "rgb(187, 231, 187)",
    },
    {
      id: 6,
      title: "Senior UI/UX Designer",
      points: [
        "Full Time",
        "On-site (Hyderabad/Goa)",
        "5-8 years Experience",
        "65k-80k per month",
      ],
      date: "Tue, 22/07/2023",
      day: "(Posted 5 days back)",
      background: "rgb(244, 219, 186)",
    },
  ];

  return (
    <div className="attendence">
      <div className="flex job-open-list-heading">
        <div>
          <FaRegFileAlt size={25} />
        </div>
        <div className="job-open-list-title">
          <h3>EMPLOYEE ATTENDANCE DETAILS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>

      <div className="details">
        <div className="flex-center-space-between">
          <div className="employee-img-name">
            <img src="/images/Picture1.png" alt="" className="employee-img" />
            <h4>Vijay Patil</h4>
          </div>
          <div className="employee-month-downlodinfo">
            <div>
              <select
                style={{
                  boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
                  border: "none",
                  padding: "5px 10px",
                  marginRight: 20,
                  backgroundColor: "#d9d9d9",
                }}
              >
                <option value="" hidden>
                  This Month
                </option>
                <option value="option1">option 1</option>
                <option value="option2">option 2</option>
              </select>
            </div>
            <div className="download-info">
              <a href="#">
                <FaDownload />
                Download info
              </a>
            </div>
          </div>
        </div>

        <div className="details-contact">
          <div className="details-contact-each">
            <span>Role</span>
            <p>GIS Analyst</p>
          </div>
          <div className="details-contact-each">
            <span>Email ID</span>
            <p>vijaya.patil@axzoragroup.com</p>
          </div>
          <div className="details-contact-each">
            <span>Phone Number</span>
            <p>+91 8734267892</p>
          </div>
        </div>

        <div className="details-hours">
          <div className="details-hours-each">
            <div className="hours-icon">
              <FaRegFileAlt />
            </div>
            <div className="details-hours-words">
              <span>40</span>
              <p>Total Work Hours</p>
            </div>
          </div>
          <div className="details-hours-each">
            <div className="hours-icon">
              <FaRegFileAlt />
            </div>
            <div className="details-hours-words">
              <span>40</span>
              <p>Total Work Hours</p>
            </div>
          </div>
          <div className="details-hours-each">
            <div className="hours-icon">
              <FaRegFileAlt />
            </div>
            <div className="details-hours-words">
              <span>40</span>
              <p>Total Work Hours</p>
            </div>
          </div>
          <div className="details-hours-each">
            <div className="hours-icon">
              <FaRegFileAlt />
            </div>
            <div className="details-hours-words">
              <span>40</span>
              <p>Total Work Hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="attendance-info">
        <div className="flex-center-space-between">
          <div className="employee-img-name">
            <h4>Attendence Info</h4>
          </div>
          <div className="employee-month-downlodinfo">
            <div>
              <select
                style={{
                  boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
                  border: "none",
                  padding: "5px 10px",
                  marginRight: 20,
                }}
              >
                <option value="" hidden>
                  Sort
                </option>
                <option value="option1">option 1</option>
                <option value="option2">option 2</option>
              </select>
            </div>
            <div
              style={{
                padding: 10,
                boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
                height: 32,
              }}
            >
              <IoGrid />
            </div>
          </div>
        </div>

        <div className="at-info-grid">
          {[
            {
              id: 1,
              backgroundColor: "aquamarine",
              color: "green",
              time: "on time",
            },
            {
              id: 2,
              color: "#E3A10F",
              backgroundColor: "rgb(245, 227, 64)",
              time: "Late",
            },
            {
              id: 3,
              color: "gray",
              backgroundColor: "#d9d9d9",
              time: "Absent",
            },
            {
              id: 4,
              color: "blue",
              backgroundColor: "#0fe3e3",
              time: "Early",
            },
            {
              id: 5,
              backgroundColor: "aquamarine",
              color: "green",
              time: "on time",
            },
            {
              id: 6,
              backgroundColor: "aquamarine",
              color: "green",
              time: "on time",
            },
          ].map((each) => (
            <div className="at-info-grid-each" key={each.id}>
              <div className="flex-center-space-between">
                <div>
                  <FaRegFileAlt />
                  <span> July 07 2023</span>
                </div>
                <span
                  className="time"
                  style={{
                    backgroundColor: each.backgroundColor,
                    color: each.color,
                  }}
                >
                  {each.time}
                </span>
              </div>
              <div
                className="flex-center-space-between"
                style={{ marginTop: "10px" }}
              >
                <div className="check-in-out">
                  <span>Check - in</span>
                  <p> July 07 2023</p>
                </div>
                <div className="check-in-out">
                  <span>Check - out</span>
                  <p> 06: 00 am</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
  );
}
