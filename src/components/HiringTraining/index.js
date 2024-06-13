import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import CustomDatePicker from "../CustomDatePicker/DatePicker";
import HiringTrainingList from "./HiringTrainingList";
import addtrainee from "components/addtrainee.png";
import axios from "axios";
 
export default function HiringTraining(handleClickNewTask) {
  const [showJobList, setShowJobList] = useState(false);
 
  const handleJobOpening = () => {
    setShowJobList(true);
  };
  const addTraining = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}hiring/training/add', {
        Trainer: 'Some Trainer', 
        Training_title: 'Some Training Title',
        
      }`);

      console.log(response.data);

    
    } catch (error) {
      console.error('Error adding training:', error);
    }
  };

  return (
    <>
      {showJobList ? (
        <HiringTrainingList />
      ) : (
        <div className="add-job-page flex">
          
          <div className="add-job-open-content">
            <h3 className="add-job-open-title"><img src={addtrainee} alt="" /> ADD TRAINING</h3>
            <div className="leave__history__header">
              <p className="faq-paragraph"style={{marginLeft:30}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                voluptas dolor saepe necessitatibus deserunt!
              </p>
            </div>
            <div className="exit_card">
              <div className="title">
                <h3>ADD TRAINING</h3>
              </div>
              <div className="task_form">
                <div className="custom-select-container">
                  <div className="custom-select-wrapper">
                    <div className="custom-select">
                      <span>Trainer</span>
 
                      <select
                        id="customSelect"
                        className="custom-select no_background"
                      >
                        <option value=""></option>
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
                      <span>Training Title</span>
 
                      <select
                        id="customSelect"
                        className="custom-select no_background"
                      >
                        <option value=""></option>
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
                    <span>From Date</span>
                    <CustomDatePicker onChangeDate={() => {}} noBackground />
                  </div>
                </div>
                <div className="custom-select-container">
                  <div className="custom-select-wrapper">
                    <span>To Date</span>
                    <CustomDatePicker onChangeDate={() => {}} noBackground />
                  </div>
                </div>
                <div className="full-width" style={{width:"100%"}} >
                  <div className="custom-select-wrapper" >
                    <div className="custom-select" >
                      <span>Trainee Names</span>
 
                      <select
                        id="customSelect"
                        className="custom-select no_background"
                      >
                        <option value=""></option>
                        <option value="option1">2</option>
                        <option value="option2">3</option>
                      </select>
                      <div className="with_label">
                        <BiSolidDownArrow className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="full-width" style={{width:"100%"}}>
                  <span>Comment</span>
                  <textarea cols="30" rows="5"></textarea>
                </div>
               
              </div>
              <div className="resign_btns" style={{ padding: "0px 20px 20px" }}>
                <Button
                  autoFocus
                  onClick={handleJobOpening}
                  className="first_btn"
                >
                  Add Training
                </Button>
                <Button onClick={() => {}} className="second_btn">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}