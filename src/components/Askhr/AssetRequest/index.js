import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import CustomDatePicker from "../../CustomDatePicker/DatePicker";
import Chat from "components/Chat.png";


export default function AssetRequest() {
    const [selectedCard, setSelectedCard] = useState(null);

    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();
  
    const formatDate = `${year}-${month}-${day}`;
  

  const handleRequest = () => {
    setSelectedCard(true);
  };

  return (
    <div className="leave__history__container loan_list">
        
      <h3> <img src={Chat} alt=""/> NEW ASSET REQUEST</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph"style={{marginLeft:30}}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>

      {/* {selectedCard !== null ? ( */}
        <div>
          <div className="exit_card">
            <div className="title">
            </div>
            <div className="task_form">
            <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <div className="custom-select">
                    <span>Asset Type</span>
                    <select
                      id="customSelect"
                      className="custom-select"
                      value={selectedCard?.type}
                      onChange={() => {}}
                    >
                      {/* {selectedCard === undefined && (
                      <option hidden>Assign by</option>
                    )} */}
                      <option value="option1">Laptop</option>
                      <option value="option2">Tablet</option>
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
                    <span>Asset Model</span>
                    <select
                      id="customSelect"
                      className="custom-select"
                      value={selectedCard?.model}
                      onChange={() => {}}
                    >
                      {/* {selectedCard === undefined && (
                      <option hidden>Assign by</option>
                    )} */}
                      <option value="option1">Macbook Pro M1 Max</option>
                      <option value="option2">Tablet</option>
                    </select>
                    <div className="with_label">
                      <BiSolidDownArrow className="icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Requested On</span>
                  <input
                    type="date"
                    className="custom-date"
                    value={selectedCard?.requestDate}
                    onChange={() => {}}
                  />
                  <div className="with_label">
                    <SlCalender className="icon" />
                  </div>
                </div>
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Required Date</span>
                  <input
                    type="date"
                    className="custom-date"
                    value={selectedCard?.RequiredDate}
                    onChange={() => {}}
                  />
                  <div className="with_label">
                    <SlCalender className="icon" />
                  </div>
                </div>
              </div>
              <div className="task_field">
                <span>Requested By</span>
                <input
                  type="text"
                  name=""
                  id=""
                  style={{ border: "1px solid #ccc" }}
                  value={selectedCard?.employeeName}
                />
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <div className="custom-select">
                    <span>Location</span>
                    <select
                      id="customSelect"
                      className="custom-select"
                      value={selectedCard?.model}
                      onChange={() => {}}
                    >
                      {/* {selectedCard === undefined && (
                      <option hidden>Assign by</option>
                    )} */}
                      <option value="option1">Goa</option>
                      <option value="option2">Hyderabad</option>
                    </select>
                    <div className="with_label">
                      <BiSolidDownArrow className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="full-width">
                  <span>Description/Specification</span>
                  <textarea cols="400" rows="5"></textarea>
                </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <div className="custom-select">
                    <span>Send to</span>
                    <select
                      id="customSelect"
                      className="custom-select"
                      value={selectedCard?.sendto}
                      onChange={() => {}}
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
                  onClick={handleRequest}
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