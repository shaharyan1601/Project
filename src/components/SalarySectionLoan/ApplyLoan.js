import React, {useState,useEffect} from "react";
import "./index.css";
import { FaRegFileAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdDriveFolderUpload } from "react-icons/md";
import loan from "./loan.png";
import axios from "axios";

export default function SalarySectionApplyLoan() {
  const [formData, setFormData] = useState({
    // Initialize form data state
    interest_rate: "",
    tenure: "",
    Desired_Amount: "",
    Annual_income: "",
    Loan_type: "",
    payment_method:"",
    First: "",
    Last: "",
    Birth_Date: "",
    Martial_status: "",
    Phone_Number: "",
    emailid: "",
    street_Address1: "",
    street_Address2: "",
    city: "",
    state: "",
    zipcode: "",
    address_year: "",
    type_of_employement: "",
    Company_Name: "",
    occupation: "",
    gross_income: "",
    monthly_rent: "",
    Down_payment: "",
    Comments: "",
    Bank_Name: "",
    Account_number: "",
    IFSC_Code: "",
    Address: "",
    pan_card: null,
    aadhar_card: null,
    passport: null,
    bank_statement: null,
    salary_slip: null,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_NODE_URL}/salary/loan/apply_loan`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
    } catch (error) {
      console.error("Error:", error);
      
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="hiring-job-open-list">
      <div className="flex job-open-list-heading">
        <div className="job-open-list-title">
          <h3><img src={loan} alt="" /> APPLY LOAN</h3>
          <p className="faq-paragraph"style={{marginLeft:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>
      <div className="apply_loan_card" style={{marginTop: "20px"}}>
        <div className="title" style={{marginTop: "40px"}}>
          <h3>LOAN APPLICATION FORM</h3>
        </div>
        <div className="task_form">
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <div className="custom-select">
                <span>Desired Loan Amount?</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.Desired_Amount}
                  onChange={handleChange}
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
                <span>Annual Income?</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.Annual_income}
                  onChange={handleChange}
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
                <span>Loan Type</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.Loan_type}
                  onChange={handleChange}
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
                <span>Payment Method</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.payment_method}
                  onChange={handleChange}
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
                <span>Interest Rate</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.interest_rate}
                  onChange={handleChange}
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
                <span>Tenure</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.tenure}
                  onChange={handleChange}
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

        </div>
        
        {/* <div className="task_form">
          {[
            {
              id: 1,
              title: "Loan will be used for",
              options: [
                "Home Improvement",
                "Personal Loan",
                "House Buying",
                "Mortgages Loan",
                "Investment",
                "Other",
              ],
            },
          ].map((question, index) => (
            <div>
              <p className="question">{question.title}</p>
              <ul className="choice-list">
                {question.options.map((option, choiceIndex) => (
                  <li className="choice-listIem">
                    <label key={choiceIndex} className="container">
                      <input
                        style={{
                          backgroundColor: "gray",
                          border: 0,
                          position: "absolute",
                          opacity: 0,
                          cursor: "pointer",
                          marginRight: 10,
                        }}
                        type="radio"
                        name={`question-${index}`}
                        id={`question-${index}`}
                        value={option}
                        //   onChange={() => handleAnswerChange(index, option)}
                      />
                      <span class="checkmark">{option}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        <h1
          style={{
            margin: 0,
            fontSize: 24,
            marginTop: 40,
            textAlign: "left",
            padding: "0px 40px",
            fontColor: "black",
          }}
        >
          PERSONAL AND CONTACT INFORMATION
        </h1>
        <div className="task_form">
          <div className="task_field">
            <span>First Name</span>
            <input type="text" style={{ border: "1px solid #ccc" }}
              name="First"
              value={formData.First}
              onChange={handleChange} 
              />
          </div>
          <div className="task_field">
            <span>Last Name</span>
            <input type="text" 
            name="Last"
            value={formData.Last}
            onChange={handleChange} 
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="task_field">
            <span>Birth Date</span>
            <input
              type="text"
              name="Birth_Date"
              value={formData.Birth_Date}
              onChange={handleChange} 
              style={{ border: "1px solid #ccc" }}
              placeholder="DD/MM/YY"
            />
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <div className="custom-select">
                <span>Marital Status</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.Martial_status}
                  onChange={handleChange} 
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
            <span>Phone Number</span>
            <input type="text"
            name="Phone_Number"
            value={formData.Phone_Number}
            onChange={handleChange}  
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="task_field">
            <span>Email ID</span>
            <input type="text" 
            name="emailid"
            value={formData.emailid}
            onChange={handleChange} 
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="task_field full-width" style={{width:"100%"}}>
            <span>Address</span>
            <input
              type="text"
              name="street_Address1"
              style={{ border: "1px solid #ccc", marginBottom: 20, height:"40px" }}
              placeholder="Street Address 1"
              value={formData.street_Address1}
              onChange={handleChange} 
            />
            <input
              type="text"
              name="street_Address2"
              style={{ border: "1px solid #ccc",height:"40px" }}
              placeholder="Street Address 2"
              value={formData.street_Address2}
              onChange={handleChange} 
            />
          </div>
          <div className="task_field">
            <input
              type="text"
              name="city"
              style={{ border: "1px solid #ccc",height:"40px" }}
              placeholder="City"
              value={formData.city}
              onChange={handleChange} 
            />
          </div>
          <div className="task_field">
            <input
              type="text"
              name="state"
              style={{ border: "1px solid #ccc",height:"40px" }}
              placeholder="State"
              value={formData.state}
              onChange={handleChange} 
            />
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <div className="custom-select">
                <select
                  id="customSelect"
                  value={formData.zipcode}
                  onChange={handleChange} 
                  className="custom-select no_background"
                >
                  
                  <option value="" hidden>
                    Postal/Zip Code
                  </option>
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
            <input 
              type="text" 
              style={{ border: "1px solid #ccc",height:"40px" }} 
              placeholder="How long have you lived in your given address"
            />
        
          </div>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 24,
            marginTop: 40,
            textAlign: "left",
            padding: "0px 40px",
          }}
        >
          EMPLOYMENT INFORMATION
        </h1>
        <div className="task_form">
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <div className="custom-select">
                <span>Type of Employment</span>
                <select
                  id="customSelect"
                  className="custom-select no_background"
                  value={formData.type_of_employement}
                  onChange={handleChange} 
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
            <span>Company Name</span>
            <input type="text" 
            name="Company_Name"
            value={formData.Company_Name}
            onChange={handleChange} 
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="task_field">
            <span>Occupation</span>
            <input type="text" 
            name="occupation"
            value={formData.occupation}
            onChange={handleChange} 
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="task_field">
            <span>Gross Monthly Income</span>
            <input
              type="text"
              name="gross_income"
              style={{ border: "1px solid #ccc" }}
              value={formData.gross_income}
              onChange={handleChange} 
              placeholder="DD/MM/YY"
            />
          </div>
          <div className="task_field">
            <span>Monthly Rent / Mortgage</span>
            <input
              type="text"
              name="monthly_rent"
              style={{ border: "1px solid #ccc" }}
              value={formData.monthly_rent}
              onChange={handleChange} 
            />
          </div>
          <div className="task_field">
            <span>Down Payment Amount</span>
            <input
              type="text"
              name="Down_payment"
              style={{ border: "1px solid #ccc" }}
              value={formData.Down_payment}
              onChange={handleChange} 
            />
          </div>

          <div className="full-width" style={{width:"100%"}}>
            <span>Comments</span>
            <textarea cols="30" rows="6"
            name="Comments"
            value={formData.Comments}
            onChange={handleChange} ></textarea>
          </div>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 24,
            marginTop: 40,
            textAlign: "left",
            padding: "0px 40px",
          }}
        >
          BANK REFERENCES
        </h1>
        <div className="task_form">
          <div className="task_field">
            <span>Bank Name</span>
            <input type="text" 
            name="Bank_Name"
            value={formData.Bank_Name}
            onChange={handleChange} 
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="task_field">
            <span>Account Number</span>
            <input type="text" 
            name="Account_number"
            value={formData.Account_number}
            onChange={handleChange} 
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="task_field">
            <span>IFSC Code</span>
            <input type="text" 
            name="IFSC_Code"
            value={formData.IFSC_Code}
            onChange={handleChange} 
            style={{ border: "1px solid #ccc" }} />
          </div>
          <div className="full-width" style={{width:"100%"}}>
            <span>Address</span>
            <textarea cols="30" rows="6"
            name="Address"
            value={formData.Address}
            onChange={handleChange} ></textarea>
          </div>
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 24,
            marginTop: 40,
            textAlign: "left",
            padding: "0px 40px",
          }}
        >
          ATTACH FILE
        </h1>
        <div className="task_form">
          <div>
            <span> Passport Size Photo</span>
            <div
              style={{ position: "relative", width: "100%", height: 45 }}
              className="custom-file-container task_field"
            >
              <label
                for="fileInput"
                className="custom-file-label"
                style={{ display: "block" }}
              >
                <div className="with_label">
                  <MdDriveFolderUpload size={20} color="gray" />
                </div>
              </label>
              <input type="file" id="fileInput" className="custom-file-input" 
               name="passport"
                value={formData.passport}
                onChange={handleChange} />
            </div>
          </div>

          <div>
            <span> PAN Card</span>
            <div
              style={{ position: "relative", width: "100%", height: 45 }}
              className="custom-file-container task_field"
            >
              <label
                for="fileInput"
                className="custom-file-label"
                style={{ display: "block" }}
              >
                <div className="with_label">
                  <MdDriveFolderUpload size={20} color="gray" />
                </div>
              </label>
              <input type="file" id="fileInput" 
                  value={formData.pan_card}
                  onChange={handleChange} 
                  className="custom-file-input" />
            </div>
          </div>

          <div>
            <span> Aadhar Card</span>
            <div
              style={{ position: "relative", width: "100%", height: 45 }}
              className="custom-file-container task_field"
            >
              <label
                for="fileInput"
                className="custom-file-label"
                style={{ display: "block" }}
              >
                <div className="with_label">
                  <MdDriveFolderUpload size={20} color="gray" />
                </div>
              </label>
              <input type="file" id="fileInput" 
                value={formData.aadhar_card}
                onChange={handleChange} 
                className="custom-file-input" />
            </div>
          </div>

          <div>
            <span> Bank Statement Slip (last 3 months)</span>
            <div
              style={{ position: "relative", width: "100%", height: 45 }}
              className="custom-file-container task_field"
            >
              <label
                for="fileInput"
                className="custom-file-label"
                style={{ display: "block" }}
              >
                <div className="with_label">
                  <MdDriveFolderUpload size={20} color="gray" />
                </div>
              </label>
              <input type="file" id="fileInput" 
              value={formData.bank_statement}
              onChange={handleChange} 
              className="custom-file-input" />
            </div>
          </div>

          <div>
            <span>salary slip (last 3 months)</span>
            <div
              style={{ position: "relative", width: "100%", height: 45 }}
              className="custom-file-container task_field"
            >
              <label
                for="fileInput"
                className="custom-file-label"
                style={{ display: "block" }}
              >
                <div className="with_label">
                  <MdDriveFolderUpload size={20} color="gray" />
                </div>
              </label>
              <input type="file" id="fileInput" 
              value={formData.salary_slip}
              onChange={handleChange} 
              className="custom-file-input" />
            </div>
          </div>
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            marginTop: 40,
            textAlign: "left",
            padding: "0px 40px",
          }}
        >
          CONSENT
        </h1>
        <label className="consent-label" style={{ padding: "0px 40px",width:"100%" }}>
          <input type="checkbox" />
          <span>
            ﻿ I Authorize Prospective Credit Grantors/Lending/Leasing Companies
            To Obtain Personal And Credit Information About Me From My Employer
            And Credit Bureau, Or Credit Reporting Agency, Any Person Who Has Or
            May Have Any Financial Dealing With Me, Or From Any References I
            Have Provided. This Information, As Well As That Provided By Me In
            The Application, Will Be Referred To In Connection With This Lease
            And Any Other Relationships We May Establish From Time To Time. Any
            Personal And Credit Information Obtained May Be Disclosed From Time
            To Time To Other Lenders, Credit Bureaus Or Other Credit Reporting
            Agencies.
          </span>
        </label>
        <label className="consent-label" style={{ padding: "0px 40px",width:"100%" }}>
          <input type="checkbox" />
          <span>
            ﻿ I Hereby Agree That The Information Given Is True, Accurate And
            Complete As Of The Date Of This Application Submission.
          </span>
        </label>
        <div className="resign_btns" style={{ padding: "20px 40px 20px" }}>
          <Button autoFocus onClick={() => {}} className="first_btn">
            Apply Now
          </Button>
          <Button onClick={() => {}} className="second_btn">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
