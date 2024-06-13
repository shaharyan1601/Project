import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

export default function ITdept({ selectedDetail, handleBackBtn }) {
    if (!selectedDetail) {
        // If selectedDetail is null or undefined, return null or an empty component
        return null;
      }
    
  return (
    <div className="job-detail-page">
      <div className="back-icon" onClick={handleBackBtn}>
        <FaArrowLeft size={30} />
      </div>
      <div className="details">
        <h3 className="detail-title">{selectedDetail.title}</h3>
        <ul className="card-point-list">
          {selectedDetail.points.map((point) => (
            <li className="card-point-listItem">{point}</li>
          ))}
        </ul>
        <h4 className="detail-sub-title">Description:</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4 className="detail-sub-title">Job Requirements</h4>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </li>
        </ul>
        <Button onClick={() => {}} className="first_btn">
          Update
        </Button>
        <Button onClick={() => {}} className="second_btn">
          Delete
        </Button>
      </div>
    </div>
  );
}
