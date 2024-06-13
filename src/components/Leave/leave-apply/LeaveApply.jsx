import React,{useState,useEffect} from 'react';
import './leaveApply.css'
import When from "components/When.png";
import CustomDatePicker from "components/CustomDatePicker/DatePicker";
import { BiSolidDownArrow } from "react-icons/bi";


function LeaveApply() {

  const [formData, setFormData] = useState({
    category: '',
    sessions: '',
    from: '',
    to: '',
    applying_to: '',
    cc: '',
    emailid: '',
    phonenumber: '',
    reason: '',
    file: null
  });

    const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_NODE_URL}/leave/leave_apply/add`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
      // Handle success
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0] 
    });
  };
  

  return (
    <div className='leave__history__container loan_list'>
            <h3>
            <img src= {When} alt="" /> WHEN DO YOU PLAN TO LEAVE?
            </h3>
            <p className='faq-paragraph' style={{marginBottom:"3rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas dolor saepe necessitatibus deserunt!</p>
        <div className='outer-box' style={{marginLeft:"4rem"}}>
        <div className="leave__form">
        <div className="custom-select-container">
            <div className="custom-select-wrapper">
                <span>Select leave Category</span>
                    <div className="custom-select">
                        <select id="customSelect" className="custom-select" onClick={handleInputChange}>
                            <option value="">  </option>
                            <option value="">Medical Issue</option>
                            <option value="">Personal Reasons</option>
                        </select>
                        <div className="custom-select-icon">
                        <BiSolidDownArrow className="icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-select-container">
             <div className="custom-select-wrapper">
                <span>Sessions</span>
                    <div className="custom-select">
                        <select id="customSelect" className="custom-select" onClick={handleInputChange}>
                            <option value="">  </option>
                            <option value="">Medical Issue</option>
                            <option value="">Personal Reasons</option>
                        </select>
                        <div className="custom-select-icon">
                            <BiSolidDownArrow className="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-select-container">
             <div className="custom-select-wrapper">
                <span> From</span>
                  <CustomDatePicker
                  placeHolderText="Start Date"
                  onChangeDate={() => {}}
                />
             </div>
           </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <span>To</span>
              <CustomDatePicker
                placeHolderText="Deadline"
                onChangeDate={() => {}}
              />
            </div>
          </div>
            <div className="leave__field" >
                <span>Applying To</span>
                <input type="text" name="applying_to" id="applying_to" value={formData.applying_to} onChange={handleInputChange} />
            </div>
            <div className="leave__field">
                <span>CC</span>
                <input type="text" name="cc" id="cc" value={formData.cc} onChange={handleInputChange}/>
            </div>
            <div className="leave__field">
                <span>Email ID</span>
                <input type="email" name="emailid" id="emailid" value={formData.emailid} onChange={handleInputChange}/>
            </div>
            <div className="leave__field">
                <span>Phone Number</span>
                <input type="number" name="phonenumber" id="phonenumber" value={formData.phonenumber} onChange={handleInputChange}/>
            </div>
            
            <div className="leave__field textarea">
                <span>Reason for absense</span>
                <textarea name="reason" id="reason" cols="30" rows="7" value={formData.reason} onChange={handleInputChange}></textarea>
            </div>
            <div className="leave__field" style={{marginTop:"12%", width:"55%"}}>
                <span>Add file</span>
                <input type="file" name="file" id="file"  onChange={handleFileChange} />
            </div>
        </div>
        
        <button className='submit__button change_btn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default LeaveApply