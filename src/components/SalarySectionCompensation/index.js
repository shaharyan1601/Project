import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaCheck, FaRegFileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./index.css";
import ModalDetails from "../ToDoLeave/Modal";
import Power from "components/Power.png";
import PaidOffModal from "./PaidTimeModal";
import axios from "axios";

export function SalarySectionCompensation() {
  const [open, setOpen] = useState(false);
  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    fetchLeaveData();
  }, []);

  const fetchLeaveData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/salary/paidtime_off/all`);
      setLeaveData(response.data.data);
    } catch (error) {
      console.error("Error fetching leave data:", error);
    }
  };
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
      leaveCategory: "Casual leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 2,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 3,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 4,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 5,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 6,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 7,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 8,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 9,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
    {
      id: 10,
      employeeName: "N.Anjali",
      date: "Tue, 24 July, 2023",
      leaveCategory: "Sick leave",
      timeOfPolicy: "Full Time",
      used: "2",
      available: "6",
    },
  ];
  return (
    <div className="compensation_list">
      <div className="flex job-open-list-heading">
        <div className="job-open-list-title">
          <h3><img src={Power} alt="" /> REQUEST TIME-OFF LIST</h3>
          <div className="leave__history__header">
            <p className="faq-paragraph"style={{marginLeft:30}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
          </div>
        </div>
      </div>

      <div className="loan_field" style={{marginTop:"1vw"}}>
        <div className="input-container" style={{ marginRight: 20 }}>
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Search by date"
          />
          <div className="loan-icon-container">
            <CiSearch className="icon" />
          </div>
        </div>
        <div className="input-container">
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Search by leave type"
          />
          <div className="loan-icon-container">
            <CiSearch className="icon" />
          </div>
        </div>
      </div>

      <div className="rounded-table-container" style={{marginTop:"1vw"}}>
      <table className="leave__history__table">
        <tr className="table__head">
          <th>S.NO.</th>
          <th>Employee Name</th>
          <th>Date</th>
          <th>Leave Category</th>
          <th>Time of Policy</th>
          <th>Used</th>
          <th>Available</th>
          <th>Action</th>
        </tr>
        {leaveData.map((data) => (
          <tr onClick={() => handleClickListItem()} key={data.id}>
            <td>{data.id}</td>
            <td>{data.employeeName}</td>
            <td>{data.date}</td>
            <td>{data.leaveCategory}</td>
            <td>{data.timeOfPolicy}</td>
            <td>{data.used}</td>
            <td> {data.available}</td>
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
      <PaidOffModal
        open={open}
        handleClickListItem={handleClickListItem}
        handleClose={handleClose}
        title="Paid Time-Off Request"
      />
    </div>
  );
}
