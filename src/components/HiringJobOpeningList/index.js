import React, { useState } from "react";
import "./index.css";
import DetailedPage from "./DetailedPage";
import { FaRegFileAlt } from "react-icons/fa";

export default function HiringJobOpeningList() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

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

  const handleViewDetails = (data) => {
    setSelectedBox(data);
    setShowDetails(true);
  };

  return (
    <>
      {showDetails ? (
        <DetailedPage
          selectedDetail={selectedBox}
          handleBackBtn={() => setShowDetails(false)}
        />
      ) : (
        <div className="hiring-job-open-list">
          <div className="flex job-open-list-heading">
            <div>
              <FaRegFileAlt size={25} />
            </div>
            <div className="job-open-list-title">
              <h3>JOB OPENING LIST</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                voluptas dolor saepe necessitatibus deserunt!
              </p>
            </div>
          </div>
          <div className="leave__history__header"></div>
          <div className="job-list-box">
            {listData.map((data) => (
              <div className="box-card">
                <div
                  className="card-role"
                  style={{ "--color": data.background }}
                >
                  <h4 className="card-title">{data.title}</h4>
                  <ul className="card-point-list">
                    {data.points.map((point) => (
                      <li className="card-point-listItem">{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-date-details">
                  <div className="date-details">
                    <span>{data.date}</span>
                    <span>{data.day}</span>
                  </div>
                  <button
                    className="view-details"
                    onClick={() => handleViewDetails(data)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
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
      )}
    </>
  );
}
