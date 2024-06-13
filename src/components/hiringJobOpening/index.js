import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import CustomDatePicker from "../CustomDatePicker/DatePicker";
import HiringJobOpeningList from "../HiringJobOpeningList";
import jobopening from "components/jobopening.png";
import axios from "axios";

export default function HiringJobOpening() {
  const [showJobList, setShowJobList] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [hiringLead, setHiringLead] = useState('');



  const handleJobOpening = () => {
    setShowJobList(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action

    const jobData = {
      jobPosition,
      hiringLead,
      // Include other fields here
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}/hiring/', jobData); // Adjust the URL as needed`)
      console.log(response.data);
      // Handle success (maybe redirect the user or show a success message)
    } catch (error) {
      console.error("Error submitting form: ", error);
      // Handle error (show error message)
    }
};


  return (
    <>
      {showJobList ? (
        <HiringJobOpeningList />
      ) : (
        <div className="add-job-page flex">
          <div className="add-job-open-content">
            <h3 className="add-job-open-title"><img src={jobopening} alt="" /> JOB OPENINGS</h3>
            <div className="leave__history__header">
              <p className="faq-paragraph"style={{marginLeft:30}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                voluptas dolor saepe necessitatibus deserunt!
              </p>
            </div>
            <div className="exit_card">
              <div className="title">
                <h3>ADD NEW JOB</h3>
              </div>
              <div className="task_form">
                <div className="custom-select-container">
                  <div className="custom-select-wrapper">
                    <div className="custom-select">
                      <span>Job Opening Position</span>

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
                <div className="task_field">
                  <span>Hiring Lead</span>
                  <input type="text" style={{ border: "1px solid #ccc" }} value={hiringLead}
                         onChange={(e) => setHiringLead(e.target.value)}/>
                </div>
                <div className="custom-select-container">
                  <div className="custom-select-wrapper">
                    <div className="custom-select">
                      <span>Number Of Job Openings</span>

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
                      <span>Status</span>
                      <select id="customSelect" className="custom-select">
                        <option value=""></option>
                        <option value="option1">Full Stack Developer</option>
                        <option value="option2">Frontend Developer</option>
                      </select>
                      <div className="with_label">
                        <BiSolidDownArrow className="icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="full-width">
                  <span>Job Requirements</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <div className="custom-select-container">
                  <div className="custom-select-wrapper">
                    <span>Created On</span>
                    <CustomDatePicker onChangeDate={() => {}} noBackground />
                  </div>
                </div>
              </div>
              <div className="resign_btns" style={{ padding: "0px 40px 20px" }}>
                <Button
                  autoFocus
                  onClick={handleSubmit}
                  className="first_btn"
                >
                  Add Job
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
