import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import others from "components/others.png";
import axios from "axios";

export default function LetterRequestEV() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState({
    subject: "",
    send_to: "",
    description: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}/others`, selectedCard);
      console.log(response.data);
      setSelectedCard({
        subject: "",
        send_to: "",
        description: "",
      });
      navigate("/success"); // Redirect to success page after submission
    } catch (error) {
      console.error("Error submitting letter request:", error);
    }
  };

  return (
    <div className="leave__history__container loan_list">
        
      <h3><img src={others} alt="" /> Letter Request</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph" style={{ marginBottom: "30px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          voluptas dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div>
        <div className="exit_card">
          <div className="task_form">
            <div className="task_field" style={{width:"50rem"}}>
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                id="subject"
                style={{ border: "1px solid #ccc", width: "155%" }}
                value={selectedCard.subject}
                onChange={(e) =>
                  setSelectedCard({ ...selectedCard, subject: e.target.value })
                }
              />
            </div>

            <div className="full-width">
              <span>Description</span>
              <textarea
                cols="20"
                rows="6"
                value={selectedCard.description}
                onChange={(e) =>
                  setSelectedCard({
                    ...selectedCard,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <div className="custom-select">
                  <span>Send to</span>
                  <select
                    id="send_to"
                    className="custom-select"
                    value={selectedCard.send_to}
                    onChange={(e) =>
                      setSelectedCard({
                        ...selectedCard,
                        send_to: e.target.value,
                      })
                    }
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
            <div></div>
            <div className="resign_btons">
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
