import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

export default function DetailedPage({ selectedDetail, handleBackBtn }) {

  const handleUpdate = async () => {

    try {
      await axios.put(`${process.env.REACT_APP_NODE_URL}/hiring/job_opening_list/update/${selectedDetail._id}`, selectedDetail);
      console.log("Job opening updated successfully");
    } catch (error) {
      console.error("Error updating job opening:", error);
      
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_NODE_URL}/hiring/job_opening_list/delete/${selectedDetail._id}`);
      console.log("Job opening deleted successfully");
    } catch (error) {
      console.error("Error deleting job opening:", error);
    
    }
  };

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
      </div>
    </div>
  );
}
