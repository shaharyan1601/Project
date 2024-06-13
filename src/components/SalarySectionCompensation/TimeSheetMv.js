import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaCheck, FaRegFileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./index.css";
import ModalDetails from "../ToDoLeave/Modal";
import { Link } from 'react-router-dom';
import ts from "components/ts.png";
export function TimeSheetMv() {
  const [open, setOpen] = useState(false);
  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);
  };
  const tableData = [
    {
      id: 1,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 2,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 3,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 4,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 5,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 6,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 7,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 8,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 9,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
    {
      id: 10,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      projectName: "Casual leave",
      department: "Full Time",
      timesheet: "View",
    },
  ];
  return (
    <div className="compensation_list">
      <div className="flex job-open-list-heading">
        
        <div className="job-open-list-title">
          <h3><img src={ts} alt="" /> TIME SHEET</h3>
          <div className="leave__history__header">
            <p className="faq-paragraph"style={{marginLeft:30}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
          </div>
        </div>
      </div>

      <div className="loan_field">
        <div className="input-container">
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Search by employee name"
          />
          <div className="loan-icon-container">
            <CiSearch className="icon" />
          </div>
        </div>
      </div>
      <div className="rounded-table-container" style={{marginTop:20}}>  
      <table className="leave__history__table">
        <tr className="table__head">
          <th>S.NO.</th>
          <th>Employee Name</th>
          <th>Date</th>
          <th>Project Name</th>
          <th>Department</th>
          <th>Time Sheet</th>
          <th>Action</th>
        </tr>
        {tableData.map((data) => (
          <tr onClick={() => handleClickListItem()} key={data.id}>
            <td>{data.id}</td>
            <td>{data.employeeName}</td>
            <td>{data.date}</td>
            <td>{data.projectName}</td>
            <td>{data.department}</td>
            <td> <Link className='payslip_link'>{data.timesheet}</Link></td>
            <td>
              <div className="action_btns">
                <Button variant="success" className="action_btn_each">
                  <span className="action_btn_green action_btn_icon">
                    <FaCheck />
                  </span>{" "}
                  Approve
                </Button>
                <div className="separator">|</div>
                <Button variant="danger" className="action_btn_each red_btn">
                  <span className="action_btn_red action_btn_icon ">
                    <RxCross1 />
                  </span>{" "}
                  Reject
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </table>
      </div>
      <div class="center">
        <div class="pagination">
          <a href="#" className="active_page">
            1
          </a>
          <a href="#" class="active">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#" className="more_page">
            ....
          </a>
        </div>
      </div>
      {/* <ModalDetails
        open={open}
        handleClickListItem={handleClickListItem}
        handleClose={handleClose}
        title="TimeSheet"
      /> */}
    </div>
  );
}
