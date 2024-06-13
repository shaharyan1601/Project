import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./index.css";
import { FaRegFileAlt } from "react-icons/fa";
import CustomDatePicker from "../../CustomDatePicker/DatePicker";

export default function ExperienceLetter() {
  const [formData, setFormData] = useState({
    Name: "",
    DOJ: "",
    Department: "",
    Designation: "",
    Description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_NODE_URL}ask_hr/experience_letter`,
        formData
      );
      console.log(response.data);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error(error.response.data);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <>
      <div className="add-job-page flex">
        <div>
          <FaRegFileAlt size={25} />
        </div>
        <div className="add-job-open-content">
          <h3 className="add-job-open-title">EXPERIENCE LETTER</h3>
          <div className="leave__history__header">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
          </div>
          <div className="exit_card">
            <div className="title">
              <h3>EXPERIENCE LETTER APPLICATION FORM</h3>
            </div>
            <div className="task_form">
              <div className="task_field">
                <span>Full Name</span>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  style={{ border: "1px solid #ccc" }}
                />
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Joining Date</span>
                  <CustomDatePicker
                    onChangeDate={(date) =>
                      setFormData({ ...formData, DOJ: date })
                    }
                    noBackground
                  />
                </div>
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Department</span>
                  <select
                    name="Department"
                    value={formData.Department}
                    onChange={handleChange}
                    className="custom-select no_background"
                  >
                    <option value=""></option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                </div>
              </div>
              <div className="custom-select-container">
                <div className="custom-select-wrapper">
                  <span>Designation</span>
                  <select
                    name="Designation"
                    value={formData.Designation}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value=""></option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                  </select>
                </div>
              </div>
              <div className="full-width">
                <span>Description</span>
                <textarea
                  name="Description"
                  value={formData.Description}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div
              className="resign_btns"
              style={{ padding: "0px 40px 20px" }}
            >
              <Button autoFocus onClick={handleSubmit} className="first_btn">
                Submit
              </Button>
              {/* Add Cancel button */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
