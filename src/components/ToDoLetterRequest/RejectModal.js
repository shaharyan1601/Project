import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import axios from "axios"; // Import axios

export default function RejectModal({ open, handleClose, title, leaveId }) {
  const [reason, setReason] = useState(""); // State to store the reason for rejection

  const handleReasonChange = (event) => {
    setReason(event.target.value); // Update the reason as the user types
  };

  const handleSend = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}todo/letter_request/reject/${leaveId}`, {
        reason: reason, // Send the reason entered by the user
      });
      console.log(response.data);
      handleClose(); // Close the modal after successful request
    } catch (error) {
      console.error("Error rejecting letter request:", error);
      // Handle error
    }
  };

  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxHeight: 550,
            borderRadius: "10px",
            maxWidth: "720px",
          },
          "& .MuiTypography-root": { padding: 0 },
          "& .MuiDialogActions-root": {
            justifyContent: "center",
          },
        }}
        maxWidth="xs"
        open={open}
      >
        <DialogContent>
          <div className="task_form">
            <div className="full-width" style={{ width: "100%" }}>
              <span>Enter your reason for rejecting</span>
              <textarea
                cols="30"
                rows="5"
                value={reason}
                onChange={handleReasonChange} // Update reason on change
              ></textarea>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleSend}
            className="modal_btn first_btn"
          >
            Send
          </Button>
          <Button onClick={handleClose} className="modal_btn second_btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
