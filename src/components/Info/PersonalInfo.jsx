import React, {useState} from "react";
import { FaRegFileAlt } from "react-icons/fa";
import axios from "axios";
import myinfo from "components/myinfo.png";
import ChangeModal from "./changeModal";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    empid:"",
    email:"",
    name:"",
    Designation: "",
    DOJ: "",
    DOB: "",
    gender: "",
    dept:"",
    reporting_to:"",
    emp_status:"",
    office_location:"",
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
    high_school:"",
    twelve:"",
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
  const [OpenChange, setOpenChange]= useState(false);

  const handleClickChange = () => {
    setOpenChange(true);
  };
  
  const handleCloseChange = (newValue) => {
    setOpenChange(false);
  };
  

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
        
    <h3> <img src={myinfo} alt="" />  PERSONAL INFO</h3>
    <div className="leave__history__header">
      <p className="faq-paragraph">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
        dolor saepe necessitatibus deserunt!
      </p>
    </div>
    <div className="personal-details">
      <h3 className="heading">Personal Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="singleBox">
            <span>Enter Employee ID</span>
            <input
              type="text"
              name="empid"
              value={formData.empid}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
            <span>Enter Email ID</span>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
            <span>Enter Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="singleBox">
          <span>Gender</span>
             <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span> Date of Birth (DOB)</span>
            <input
              type="text"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Marital Status</span>
          <input
              type="text"
              name="martial_Status"
              value={formData.martial_Status}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Date of Joining (DOJ)</span>
            <input
              type="text"
              name="DOJ"
              value={formData.DOJ}
              onChange={handleChange}
            />
        </div>

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
          <span>Department</span>
        <input
              type="text"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
            />
        </div>
        
        <div className="singleBox">
          <span>Reporting To</span>
          <input
              type="text"
              name="reporting_to"
              value={formData.reporting_to}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Employment Status</span>
          <input
              type="text"
              name="emp_status"
              value={formData.emp_status}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Office Location</span>
          <input
              type="text"
              name="office_location"
              value={formData.office_location}
              onChange={handleChange}
            />
        </div>
      </form>
      <h3 className="heading">Contact Information</h3>
      <form action="">
        <div className="singleBox">
          <span>Contact</span>
          <input
              type="text"
              name="contactno"
              value={formData.contactno}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Emergency Contact</span>
          <input
              type="text"
              name="Emergencycontactno"
              value={formData.Emergencycontactno}
              onChange={handleChange}
            />
        </div>
      </form>

      <h3 className="heading">Address Information</h3>
      <form action="">
        <div className="singleBox">
          <span>House no, Building name</span>
          <input
              type="text"
              name="hno"
              value={formData.hno}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Area, City</span>
          <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>State</span>
          <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Zip Code</span>
          <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
            />
        </div>
      </form>

      <h3 className="heading">Identification Information</h3>
      <form action="">
        <div className="singleBox">
          <span>PAN Card number</span>
          <input
              type="text"
              name="PAN"
              value={formData.PAN}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Aadhaar Card number</span>
          <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Passport</span>
          <input
              type="text"
              name="passport"
              value={formData.passport}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Driving License</span>
          <input
              type="text"
              name="driving_licence"
              value={formData.driving_licence}
              onChange={handleChange}
            />
        </div>
      </form>

      <h3 className="heading">Educational Information</h3>
      <form action="">
        <div className="singleBox">
          <span>10th Class</span>
          <input
              type="text"
              name="high_school"
              value={formData.high_school}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Intermediate</span>
          <input
              type="text"
              name="twelve"
              value={formData.twelve}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Graduation</span>
          <input
              type="text"
              name="graduation"
              value={formData.graduation}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Higher Studies</span>
          <input
              type="text"
              name="higher_studies"
              value={formData.higher_studies}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span> Any Certification Course</span>
          <input
              type="text"
              name="anycertification_course"
              value={formData.anycertification_course}
              onChange={handleChange}
            />
        </div>
      </form>

      <h3 className="heading">Job Information</h3>
      <form action="">
        <div className="singleBox">
          <span>Freshers/Experience</span>
          <input
              type="text"
              name="freshers_experience"
              value={formData.freshers_experience}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Experience letter</span>
          <input
              type="text"
              name="experience_letter"
              value={formData.experience_letter}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Reliving Letter</span>
          <input
              type="text"
              name="reliving_letter"
              value={formData.reliving_letter}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Pay Slips(Last 6 months)</span>
          <input
              type="text"
              name="payslips"
              value={formData.payslips}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Other Certificates</span>
          <input
              type="text"
              name="other_certs"
              value={formData.other_certs}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>Reference Contact Numbers</span>
          <input
              type="text"
              name="reference_contact"
              value={formData.reference_contact}
              onChange={handleChange}
            />
        </div>
      </form>

      <h3 className="heading">Bank Details</h3>
      <form action="">
        <div className="singleBox">
          <span>Account Number & Bank Name</span>
          <input
              type="text"
              name="bank_name"
              value={formData.bank_name}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>IFSC Code</span>
          <input
              type="text"
              name="ifsc_code"
              value={formData.ifsc_code}
              onChange={handleChange}
            />
        </div>
      </form>

      <h3 className="heading">Other Information</h3>
      <form action="">
        <div className="singleBox">
          <span>If you already possess a PF account?</span>
          <input
              type="text"
              name="pf_account"
              value={formData.pf_account}
              onChange={handleChange}
            />
        </div>
        <div className="singleBox">
          <span>UIN Number</span>
          <input
              type="text"
              name="UIN_Number"
              value={formData.UIN_Number}
              onChange={handleChange}
            />
        </div>
        
      </form>


      <form onClick={handleClickChange}>
           <button type="button" className="change_btn" >Change Request</button>
        </form>

        {OpenChange && (
            <ChangeModal
              open={OpenChange}
              handleClickButton={handleClickChange}
              handleClose={handleCloseChange}
              title="Request For Information Modification"
            />
          )}
    </div>
    </div>
    
  );
}

export default PersonalInfo;
