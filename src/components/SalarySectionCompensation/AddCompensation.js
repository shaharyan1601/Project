import React, { useState, useEffect }  from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaLongArrowAltRight, FaRegFileAlt } from "react-icons/fa";
import CustomDatePicker from "../CustomDatePicker/DatePicker";
import { Button } from "react-bootstrap";
import "./index.css";
import Money from "components/Money.png";
import axios from "axios";

export function AddCompensation() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    effectiveDate: "",
    payRate: "",
    paySchedule: "",
    payType: "",
    overtime: "",
    changeReason: "",
    comment: ""
  });

  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_NODE_URL}/salary/compensation/add`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sendDataToBackend = () => {
    // Gather form data from the state
    const payload = { ...formData };

    axios.post(`${process.env.REACT_APP_NODE_URL}/salary/compensation/add`, payload)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // Optionally, you can reset the form or take other actions after successful submission.
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  
  const handleInputChange = (fieldName, value) => {
    // Update the form data when input changes
    setFormData({ ...formData, [fieldName]: value });
  };
  
  return (
    <div className="add-job-page flex">
      
      <div className="payroll-content">
        <div style={{ position: "relative", display: "inline-block" }}>
          <h3 className="section-title"><img src={Money} alt="" /> ADD COMPENSATION</h3>
          {/* <span style={{ cursor: "pointer" }}>
            <FaLongArrowAltRight
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                transform: "scaleX(3) scaleY(2.5)",
                height: "1vh",
              }}
              size={20}
            />
          </span> */}
        </div>
        <p className="faq-paragraph"style={{marginLeft:30}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
        <div className="exit_card">
          <div className="title">
            <h3>ADD COMPENSATION</h3>
          </div>
          <div className="task_form">
            <div className="task_field">
              <span> Employee ID</span>
              <input type="text"
                name="employeeID" 
                value={formData.employeeId}
                
                
              style={{ border: "1px solid #ccc" }}
              onChange={(e) => handleInputChange("employeeId", e.target.value)} />
            </div>
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <div className="custom-select">
                  <span>Employee Name</span>
                  <select
                    id="customSelect"
                    className="custom-select no_background"
                    value={formData.employeeName}
                    onChange={(e) => handleInputChange("employeeName", e.target.value)} 
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
                <span onChange={(e) => handleInputChange("effectiveDate", e.target.value)}>Effective Date</span>
                <CustomDatePicker onChangeDate={() => {}} noBackground />
              </div>
            </div>
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <div className="custom-select">
                  <span>Pay Rate</span>
                  <select
                    id="customSelect"
                    className="custom-select no_background"
                    value={formData.payRate}
                    onChange={(e) => handleInputChange("payRate", e.target.value)}
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
                  <span>Pay Schedule</span>
                  <select
                    id="customSelect"
                    className="custom-select no_background"
                    value={formData.paySchedule}
                    onChange={(e) => handleInputChange("paySchedule", e.target.value)}
                    
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
                  <span>Pay Type</span>
                  <select
                    id="customSelect"
                    className="custom-select no_background"
                    value={formData.payType}
                    onChange={(e) => handleInputChange("payType", e.target.value)}
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
                  <span>Over time</span>
                  <select
                    id="customSelect"
                    className="custom-select no_background"
                    value={formData.overtime}
                    onChange={(e) => handleInputChange("overtime", e.target.value)}
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
                  <span>Change Reason</span>
                  <select
                    id="customSelect"
                    className="custom-select no_background"
                    value={formData.changeReason}
                    onChange={(e) => handleInputChange("changeReason", e.target.value)}
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
            <div className="full-width">
              <span>Comment</span>
              <textarea cols="30" rows="10"
                value={formData.comment}
                onChange={(e) => handleInputChange("comment", e.target.value)}
                name="comment"
              ></textarea>
            </div>
          </div>
          <div className="resign_btns" style={{ padding: "0px 40px 20px" }}>
            <Button
              autoFocus
              // onClick={handleJobOpening}
              className="first_btn"
            >
              Add
            </Button>
            <Button onClick={() => {}} className="second_btn">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCompensation;