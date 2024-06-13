import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import ModalDetails from "./Modal";
import { Button } from "react-bootstrap";
import early from "components/early.png";
import axios from "axios";

export default function ToDoLeave(){
  const [open, setOpen] = useState(false);
  const [leaveList, setLeaveList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLeaveId, setSelectedLeaveId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaveList();
  }, [currentPage]);

  const fetchLeaveList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}todo/early_going`);
      setLeaveList(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching leave list:", error);
      setError("An error occurred while fetching leave list.");
      setLoading(false);
    }
  };

  const handleClickListItem = (leaveId) => {
    setSelectedLeaveId(leaveId);
    setOpen(true);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClose = () => {
    setSelectedLeaveId(null);
    setOpen(false);
  };

  return (
    <>
      <div className="leave__history__container loan_list">
        <h3><img src={early} alt="" /> PENDING LEAVE REQUEST LIST</h3>
        <div className="leave__history__header">
          <p className="faq-paragraph"style={{marginLeft:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
        <div className="rounded-table-container" style={{ marginTop: 20 }}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table className="leave__history__table">
              <thead>
                <tr className="table__head">
                  <th>S.NO.</th>
                  <th>Employee Name</th>
                  <th>Date</th>
                  <th>Leave category</th>
                  <th>sessions</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {leaveList.map((leave, index) => (
                  <tr key={leave._id} onClick={() => handleClickListItem(leave._id)}>
                    <td>{index + 1}</td>
                    <td>{leave.username}</td>
                    <td>{leave.Date}</td>
                    <td>{leave.category}</td>
                    <td>{leave.sessions}</td>
                    <td>
                      <div className="action_btns">
                        <Button
                          variant="success"
                          className="action_btn_each"
                        >
                          <span className="action_btn_green action_btn_icon">
                            <FaCheck />
                          </span>{" "}
                          Approve
                        </Button>
                        <div className="separator">|</div>
                        <Button
                          variant="danger"
                          className="action_btn_each red_btn"
                        >
                          <span className="action_btn_red action_btn_icon ">
                            <RxCross1 />
                          </span>{" "}
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="center">
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <a
                href="#"
                key={page}
                className={currentPage === page ? "active_page" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </a>
            ))}
          </div>
        </div>
      </div>
      <ModalDetails 
        open={open} 
        leaveId={selectedLeaveId} 
        handleClose={handleClose} 
      />
    </>
  );
}
