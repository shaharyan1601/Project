import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight, FaRegFileAlt } from "react-icons/fa";
import "./index.css";
import { Button } from "react-bootstrap";
import BasicMenu from "./Menu";
import Money from "components/Money.png";
import axios from "axios";

export function CompensationList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const [compensationList, setCompensationList] = useState([]);

  useEffect(() => {
    // Fetch compensation list when the component mounts
    axios.get(`${process.env.REACT_APP_NODE_URL}/salary/compensation/list`)
      .then(response => {
        setCompensationList(response.data.data); // Assuming the data is in the 'data' property
      })
      .catch(error => {
        console.error('Error fetching compensation list:', error);
      });
  }, []);

  const tableData = [
    {
      id: 1,
      effectiveDate: "Tue, 24 July, 2023",
      payRate: "2,00,000/Year",
      paySchedule: "Twice a month",
      payType: "Salary",
      overtime: "Exempt",
      reason: "Pay Increase",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      effectiveDate: "Tue, 24 July, 2023",
      payRate: "2,00,000/Year",
      paySchedule: "Twice a month",
      payType: "Salary",
      overtime: "Exempt",
      reason: "Pay Increase",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      effectiveDate: "Tue, 24 July, 2023",
      payRate: "2,00,000/Year",
      paySchedule: "Twice a month",
      payType: "Salary",
      overtime: "Exempt",
      reason: "Pay Increase",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      effectiveDate: "Tue, 24 July, 2023",
      payRate: "2,00,000/Year",
      paySchedule: "Twice a month",
      payType: "Salary",
      overtime: "Exempt",
      reason: "Pay Increase",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      effectiveDate: "Tue, 24 July, 2023",
      payRate: "2,00,000/Year",
      paySchedule: "Twice a month",
      payType: "Salary",
      overtime: "Exempt",
      reason: "Pay Increase",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="compensation_list">
      <div className="flex job-open-list-heading">
        
        <div className="payroll-content">
          <div style={{ position: "relative", display: "inline-block" }}>
            <h3 className="section-title"><img src={Money} alt="" />  COMPENSATION LIST</h3>
            {/* <span style={{ cursor: "pointer" }}>
              <FaLongArrowAltRight
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  transform: "scaleX(3) scaleY(2.5)",
                  height: "1vh",
                }}
                size={20}
              />
            </span> */}
          </div>
          <p className="faq-paragraph"style={{marginLeft:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>

      <div className="loan_field">
        <div className="input-container" style={{ marginRight: 20 }}>
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Enter Employee ID"
          />
        </div>
        <div className="input-container">
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Enter Employee Name"
          />
        </div>
        <div className="serach_icon_div">
          <CiSearch className="serach_icon" size={20} color="white" />
        </div>
      </div>

      <table className="compensation-table">
        <tr className="table__head" style={{backgroundColor:'#522d59', color:'white'}}>
          <th>Effective Date</th>
          <th>Pay Rate</th>
          <th>Pay Schedule</th>
          <th>Pay Type</th>
          <th>Overtime</th>
          <th>Change Reason</th>
          <th>Comment</th>
          <th>Action</th>
        </tr>
        {compensationList.map((data) => (
          <tr key={data.id}>
            <td>{data.effectiveDate}</td>
            <td>{data.payRate}</td>
            <td>{data.paySchedule}</td>
            <td>{data.payType}</td>
            <td> {data.overtime}</td>
            <td> {data.reason}</td>
            <td> {data.comment}</td>
            <td>
              {/* <Button
                id="basic-button"
                aria-controls={menuOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
                onClick={handleMenuClick}
              >
                ...
              </Button> */}
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  justifyContent: "center",
                }}
                onClick={handleMenuClick}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    marginRight: "4px",
                  }}
                ></div>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    marginRight: "4px",
                  }}
                ></div>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    marginRight: "4px",
                  }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </table>
      <button className="submit__btn">Next</button>
      <BasicMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={menuOpen}
        items={["View", "Download", "Update", "Delete"]}
      />
    </div>
  );
}
