import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./index.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import CustomDatePicker from "../../CustomDatePicker/DatePicker";
import askme from "components/askme.png";




export default function OnMind() {
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [sendTo, setSendTo] = useState("");

    const handleSubmit = async () => {
        try {
            // Send a POST request to your backend endpoint
            const response = await axios.post('${process.env.REACT_APP_NODE_URL}ask_hr/whats_on_your_mind', { subject, description, sendTo });
            console.log(response.data.message); 
            // Handle success, maybe show a success message to the user
        } catch (error) {
            console.error("Error submitting form:", error.message); 
            // Handle error, maybe show an error message to the user
        }
    };

    return (
        <div className="leave__history__container loan_list">
            <h3><img src= {askme} alt="" /> WHAT'S ON YOUR MIND?</h3>
            <div className="leave__history__header">
            <p className="faq-paragraph"style={{marginLeft:30,marginBottom:"3%"}}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
            </div>
            <div>
                <div className="exit_card">
                    <div className="task_form">
                        <div className="full-width" style={{marginTop:20}}>
                            <span>Subject</span>
                            <textarea
                                cols="20"
                                rows="1.5"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="full-width">
                            <span>Description</span>
                            <textarea
                                cols="18"
                                rows="7"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="custom-select-container">
                            <div className="custom-select-wrapper">
                                <div className="custom-select">
                                    <span>Send to</span>
                                    <select
                                        id="customSelect"
                                        className="custom-select"
                                        value={sendTo}
                                        onChange={(e) => setSendTo(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="HR">HR</option>
                                        <option value="Manager">Manager</option>
                                    </select>
                                    <div className="with_label">
                                        <BiSolidDownArrow className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-select-container"> </div>
                        <div className="resign_btns">
                            <Button autoFocus onClick={handleSubmit} className="first_btn">
                                Submit
                            </Button>
                            <Button className="second_btn">Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
