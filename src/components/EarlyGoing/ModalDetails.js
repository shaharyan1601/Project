import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

export default function ModalDetails({ open, leaveId, handleClose }) {
  const [leaveDetails, setLeaveDetails] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (open) {
      fetchLeaveDetails();
    }
  }, [open]);

  const fetchLeaveDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/todo/early_going/${leaveId}`);
      setLeaveDetails(response.data.leave);
    } catch (error) {
      console.error("Error fetching leave details:", error);
    }
  };

  const handleApprove = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_NODE_URL}/todo/early_going/approve/${leaveId}`, {
        params: { comment },
      });
      handleClose();
    } catch (error) {
      console.error("Error approving leave:", error);
    }
  };

  const handleReject = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_NODE_URL}/todo/early_going/reject/${leaveId}`, {
        params: { comment },
      });
      handleClose();
    } catch (error) {
      console.error("Error rejecting leave:", error);
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
          <span className="title">Early Going Leave Request</span>
          <span className="close_btn">
            <IconButton onClick={handleClose}>
              <RxCross1 />
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent>
          {leaveDetails && (
            <>
              <h4>{leaveDetails.category} Leave</h4>
              <div className="leave_details">
                <div className="employee_leave_details">
                  <h6 className="employee_name">{leaveDetails.username}</h6>
                  <span className="brief_reason">
                    {leaveDetails.amount} hours early going request ({new Date(leaveDetails.from).toLocaleDateString()})
                  </span>
                  <p className="calender_view">View in calender</p>
                  <div className="reason">{leaveDetails.reason}</div>
                  <textarea
                    className="comments"
                    type="text"
                    placeholder="Add your comment....."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleApprove}
            className="modal_btn first_btn"
          >
            Approve
          </Button>
          <Button onClick={handleReject} className="modal_btn second_btn">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
