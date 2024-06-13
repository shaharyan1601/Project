import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./index.css";
// Correct the import statements if necessary
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl"; // Ensure the correct import, this might be a typo
import CustomDatePicker from "../../CustomDatePicker/DatePicker"; // Make sure the path is correct
import ResignFlow from "./ResignFlow"; // Ensure this component exists and the path is correct
import axios from 'axios';
import resignationaskhr from "components/resignationaskhr.png";

export default function Resignation() {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null);
    const [resignationDate, setResignationDate] = useState("");
    const [showFlow, setShowFlow] = useState(false); // If you plan to use `setShowFlow`, you should also declare `showFlow` state.

    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();

    const formatDate = `${year}-${month}-${day}`;

    useEffect(() => {
      // Set resignation date after component mounts
      setResignationDate(formatDate);
  }, []);

  const handleResignationDateChange = (e) => {
    setResignationDate(e.target.value);
  };


    const handleResign = async () => {
        try {
            // Send HTTP POST request to backend
            const response = await axios.post(`${process.env.REACT_APP_NODE_URL}/askhr/resignation_letter`, {
                Resignation_Date: formatDate,
                last_workday: selectedCard?.last_workday,
                send_to: selectedCard?.send_to, // Change this to the actual recipient selected by the user
                Description: selectedCard?.description, // Change this to the actual description entered by the user
                reason: selectedCard?.reason // Change this to the actual reason entered by the user
            });

            // Handle response from backend
            console.log("Resignation submitted:", response.data);
            setShowFlow(true);
        } catch (error) {
            console.error('Error submitting resignation:', error);
        }
    };

   
    return (
        <div className="leave__history__container loan_list">
            <h3> <img src={resignationaskhr} alt=""/> RESIGNATION</h3>
            <div className="leave__history__header">
                <p className="faq-paragraph" style={{ marginLeft: 40 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
                    dolor saepe necessitatibus deserunt!
                </p>
            </div>
            <div>
                <div className="exit_card">
                    <div className="title">
                        <h3>RESIGNATION EXIT WORKFLOW</h3>
                    </div>
            <div className="task_form">
            <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Resignation Date</span>
                  <input
                    type="date"
                    className="custom-date"
                    value={formatDate}
                    onChange={handleResignationDateChange}
                  />
                  <div className="with_label">
                    <SlCalender className="icon" />
                  </div>
                </div>
              </div>

              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Reason for resignation</span>
                  <input
                    type="text"
                    className="custom-date"
                    value={selectedCard?.reason}
                    onChange={() => {}}
                  />
                  <div className="with_label">
                  </div>
                </div>
              </div>
             

              <div className="full-width" style={{width:"100%"}}>
                  <span>Description</span>
                  <textarea cols="30" rows="8"  value={selectedCard?.description}
                    onChange={(e) => setSelectedCard({ ...selectedCard, description: e.target.value })}
                  ></textarea>
                </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <div className="custom-select">
                    <span>Send to</span>
                    <select
                      id="customSelect"
                      className="custom-select "
                      value={selectedCard?.sendto}
                      onChange={(e) => setSelectedCard({ ...selectedCard, send_to: e.target.value })}
                    >
                      {/* {selectedCard === undefined && (
                      <option hidden>Assign by</option>
                    )} */}
                      <option value="">Select</option>
                      <option value="option1">HR</option>
                      <option value="option2">Manager</option>
                    </select>
                    <div className="with_label">
                      <BiSolidDownArrow className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
              <div className="resign_btns">
                <Button
                  autoFocus
                  onClick={handleResign}
                  className="first_btn"
                >
                  Submit
                </Button>
                <Button className="second_btn">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>  
    </div>      
  )}