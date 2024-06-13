import React from "react";

export default function RightPanelCard() {
  return (
    <div className="loan_details_section">
      <h2 className="section-title">task & Assign task</h2>
      <div className="loan_details_card">
        <div className="header">
          <span className="title">Loan Details</span>
          <span className="close_btn">X</span>
        </div>
        <div className="person_info_card">
          <div className="person_info">
            <img alt="" className="person_img" />
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
                  <div>Lorem ipsum</div>
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
    </div>
  );
}
