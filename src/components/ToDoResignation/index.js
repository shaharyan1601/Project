import React, { useState, useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import "./index.css";
import { Button } from "react-bootstrap";
import { BiSolidDownArrow } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import ApproveModal from "./ApproveModal";
import RejectModal from "./RejectModal";
import normal from "components/normal.png";

import axios from "axios";

export default function ToDoResignation() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [approveModalOpen, setApproveModalOpen] = useState(false);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [resignData, setResignData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLeaveId, setSelectedLeaveId] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("${process.env.REACT_APP_NODE_URL}todo/resignation");
      setResignData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };

  const handleResignationClick = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}todo/resignation/action/${id}`);
      setSelectedCard(response.data.resignations);
    } catch (error) {
      console.error("Error fetching resignation details:", error);
    }
  };

  const handleApproveModal = (leaveId) => {
    setSelectedLeaveId(leaveId);
    setApproveModalOpen(true);
  };

  const handleRejectModal = (leaveId) => {
    setSelectedLeaveId(leaveId);
    setRejectModalOpen(true);
  };

  return (
    <div className="leave__history__container loan_list">
      <h3><img src={normal} alt="" /> RESIGNATION</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph"style={{marginLeft:30}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>

      {selectedCard !== null ? (
        <>
          <div className="exit_card">
            <div className="title">
              <h3>RESIGNATION EXIT WORKFLOW</h3>
            </div>
            <div className="task_form">
              <div className="task_field">
                <span>Employee name</span>
                <input
                  type="text"
                  name=""
                  id=""
                  style={{ border: "1px solid #ccc" }}
                  value={selectedCard?.username}
                  readOnly
                />
              </div>
              <div className="task_field">
                <span>Employee ID</span>
                <input
                  type="text"
                  name=""
                  id=""
                  style={{ border: "1px solid #ccc" }}
                  value={selectedCard?.user_id}
                  readOnly
                />
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <div className="custom-select">
                    <span>Yours Of Experience With Axzora</span>
                    <select
                      id="customSelect"
                      className="custom-select no_background"
                      value={selectedCard?.year_of_exp}
                      onChange={() => {}}
                      readOnly
                    >
                      <option value="option1">2</option>
                      <option value="option2">3</option>
                    </select>
                    <div className="with_label">
                      <BiSolidDownArrow className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <div className="custom-select">
                    <span>Designation</span>
                    <select
                      id="customSelect"
                      className="custom-select"
                      value={selectedCard?.designation}
                      onChange={() => {}}
                      readOnly
                    >
                      <option value="option1">Full Stack Developer</option>
                      <option value="option2">Frontend Developer</option>
                    </select>
                    <div className="with_label">
                      <BiSolidDownArrow className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Resignation Date</span>
                  <input
                    type="date"
                    className="custom-date"
                    value={selectedCard?.Date}
                    onChange={() => {}}
                    readOnly
                  />
                  <div className="with_label">
                    <SlCalender className="icon" />
                  </div>
                </div>
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Tentative last working day</span>
                  <input
                    type="date"
                    className="custom-date"
                    value={selectedCard?.last_workday}
                    onChange={() => {}}
                    readOnly
                  />
                  <div className="with_label">
                    <SlCalender className="icon" />
                  </div>
                </div>
              </div>
              <div className="full-width">
                {selectedCard?.description !== undefined && <span>Description</span>}
                <textarea cols="30" rows="10" value="Lorem" readOnly></textarea>
              </div>
            </div>
          </div>
          <div className="resign_btns">
          <Button autoFocus onClick={() => handleApproveModal(selectedCard?._id)} className="first_btn">              Approve
            </Button>
            <Button onClick={() => handleRejectModal(selectedCard?._id)} className="second_btn">              Reject
            </Button>
          </div>
        </>
      ) : (
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            resignData.map((data) => (
              <div
                className="resign_card"
                onClick={() => handleResignationClick(data.id)}
                key={data.id}
              >
                <div>
                  <TfiEmail size={20} />
                </div>
                <ul className="resign_card_list">
                  <li className="resign_card_listItem">{data.username}</li>
                  <li className="resign_card_listItem">{data.Date}</li>
                </ul>
              </div>
            ))
          )}
        </div>
      )}
      {approveModalOpen && (
        <ApproveModal
          open={approveModalOpen}
          leaveId={selectedLeaveId} 
          handleClose={() => setApproveModalOpen(false)}
          title="Resignation Request"
        />
      )}
      {rejectModalOpen && (
        <RejectModal
          open={rejectModalOpen}
          handleClose={() => setRejectModalOpen(false)}
          title="Resignation Request"
          leaveId={selectedLeaveId} 

        />
      )}
    </div>
  );
}
