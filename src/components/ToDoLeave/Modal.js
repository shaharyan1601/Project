import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import dp from "./ToDoLeaveDetails/Picture1.png";
import axios from "axios";

export default function ModalDetails({ open, handleClose, title, leaveId }) {
  const [leaveDetails, setLeaveDetails] = useState(null);

  useEffect(() => {
    if (open && leaveId) {
      fetchLeaveDetails(leaveId);
    }
  }, [open, leaveId]);

  const fetchLeaveDetails = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/leave/action/${id}`);
      setLeaveDetails(response.data.leave);
    } catch (error) {
      console.error("Error fetching leave details:", error.message);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.get(`${process.env.REACT_APP_NODE_URL}/leave/approve/${id}`);
      handleClose();
    } catch (error) {
      console.error("Error approving leave:", error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`${process.env.REACT_APP_NODE_URL}/leave/reject/${id}`);
      handleClose();
    } catch (error) {
      console.error("Error rejecting leave:", error.message);
    }
  };

  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxHeight: 460,
            borderRadius: "10px",
            maxWidth: "600px",
          },
          "& .MuiTypography-root": { padding: 0 },
          "& .MuiDialogActions-root": {
            justifyContent: "center",
          },
        }}
        maxWidth="xs"
        open={open}
      >
        <DialogTitle>
          <span className="dialoguetitle">{title}</span>
          <span className="close_btn">
            <IconButton onClick={handleClose}>
              <RxCross1 />
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent>
          {leaveDetails ? (
            <>
              <h4>{leaveDetails.category}</h4>
              <div className="leave_details">
                <img className="employee_img" src={dp} alt="" />
                <div className="employee_leave_details">
                  <h6 className="employee_name">{leaveDetails.username}</h6>
                  <span className="brief_reason">
                    {" "}
                    {leaveDetails.from} to {leaveDetails.to}
                  </span>
                  <p className="calender_view">View in calender</p>
                  <div className="reason">{leaveDetails.reason}</div>
                  <textarea
                    className="comments"
                    type="text"
                    placeholder="Add your comment....."
                  />
                </div>
              </div>
            </>
          ) : (
            <p>Loading leave details...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleApprove(leaveId)} className="dialogue_btn fst_btn">
            Approve
          </Button>
          <Button onClick={() => handleReject(leaveId)} className="dialogue_btn scnd_btn">
            Reject
          </Button>
          <Button autoFocus onClick={handleClose} className="dialogue_btn scnd_btn">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
