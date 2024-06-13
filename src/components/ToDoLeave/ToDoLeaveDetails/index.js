import React from "react";
import "./index.css";

export default function ToDoLeaveDetails() {
  return (
    <div className="loan_details_card">
      {/* <div className="header">
          <span className="title">Approval Request</span>
          <span className="close_btn">X</span>
        </div> */}
      <div className="person_info_card">
        <div className="person_info">
          <div className="person_details">
            <div className="role">
              <span>APL/HR/1234-ANJALI NARWADE (UI/UX DESIGNER)</span>
            </div>
            <ul className="person_details_list">
              <li className="person_details_list_item">
                <div>icon</div>
                <div>+91 9876543210</div>
              </li>
              <li className="person_details_list_item">
                <div>icon</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas dolor saepe necessitatibus deserunt!</div>
              </li>
              <li className="person_details_list_item">
                <div>icon</div>
                <div>anjali.narwade@gmail.com</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
