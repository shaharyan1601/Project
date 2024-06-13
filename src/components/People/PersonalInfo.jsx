import React, {useState} from "react";
import { FaRegFileAlt } from "react-icons/fa";
import axios from "axios";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    Designation: "",
    DOJ: "",
    DOB: "",
    gender: "",
    region: "",
    martial_Status: "",
    medicalhistory: "",
    bloodgroup: "",
    contactno: "",
    Emergencycontactno: "",
    hno: "",
    area: "",
    state: "",
    zipcode: "",
    PAN: "",
    aadhar: "",
    passport: "",
    driving_licence:"",
    ['10th_class']:"",
    ['12th_class']:"",
    graduation:"",
    higher_studies:"",
    anycertification_course:"",
    freshers_experience:"",
    experience_letter:"",
    reliving_letter:"",
    payslips:"",
    other_certs:"",
    reference_contact:"",
    bank_name:"",
    ifsc_code:"",
    pf_account:"",
    UIN_Number:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}myinfo/update/personalinfo/save`, formData);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error updating personal information:", error.message);
    }
  };

  return (
    <div className="leave__history__container loan_list">
        
    <h3> <FaRegFileAlt size={25} /> PERSONAL INFO</h3>
    <div className="leave__history__header">
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
        dolor saepe necessitatibus deserunt!
      </p>
    </div>
    <div className="personal-details">
      <h1>Personal Information</h1>
      <form onSubmit={handleSubmit}>
          <div className="singleBox">
            <span>Designation</span>
            <input
              type="text"
              name="Designation"
              value={formData.Designation}
              onChange={handleChange}
            />
          </div>
        <div className="singleBox">
          <span>Date of joining (DOJ)</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Region</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Date of birthday (DOB)</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Gender</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Marital Status</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Medical History</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Blood Group</span>
          <input type="text" />
        </div>
      </form>
      <h1>Contact Information</h1>
      <form action="">
        <div className="singleBox">
          <span>Contact</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Emergency Contact</span>
          <input type="text" />
        </div>
      </form>

      <h1>Address Information</h1>
      <form action="">
        <div className="singleBox">
          <span>House no, Building name</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Area, City</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>State</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Zipcode</span>
          <input type="number" />
        </div>
      </form>

      <h1>Identification Information</h1>
      <form action="">
        <div className="singleBox">
          <span>PAN Card number</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Aadhaar Card number</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Passport</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Driving License</span>
          <input type="number" />
        </div>
      </form>

      <h1>Educational Information</h1>
      <form action="">
        <div className="singleBox">
          <span>10th Class</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Intermediate</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Graduation</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Higher Studies</span>
          <input type="number" />
        </div>
        <div className="singleBox">
          <span> Any Certification Course</span>
          <input type="number" />
        </div>
      </form>

      <h1>Job Information</h1>
      <form action="">
        <div className="singleBox">
          <span>Freshers/Experience</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Experience letter</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Reviving Letter</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>Pay Slips(Last six months)</span>
          <input type="number" />
        </div>
        <div className="singleBox">
          <span>Other Certificates</span>
          <input type="number" />
        </div>
        <div className="singleBox">
          <span>Refernce Contact Numbers</span>
          <input type="number" />
        </div>
      </form>

      <h1>Bank Details</h1>
      <form action="">
        <div className="singleBox">
          <span>Bank Name</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>IFSC Code</span>
          <input type="text" />
        </div>
      </form>

      <h1>Other Information</h1>
      <form action="">
        <div className="singleBox">
          <span>If you already possess a PF account?</span>
          <input type="text" />
        </div>
        <div className="singleBox">
          <span>UIN Number</span>
          <input type="text" />
        </div>
        
      </form>


      <form onSubmit={handleSubmit}>
           <button className="btn" >Change Request</button>
        </form>
    </div>
    </div>
    
  );
}

export default PersonalInfo;
