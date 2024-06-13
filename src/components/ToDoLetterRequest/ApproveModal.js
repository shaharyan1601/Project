import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import CustomDatePicker from "../CustomDatePicker/DatePicker";
import axios from "axios"; // Import axios

export default function ApproveModal({ open, handleClose, title, leaveId }) {
  const [description, setDescription] = useState(""); // State to store the description

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Update the description as the user types
  };

  const handleSend = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}todo/letter_request/approve/${leaveId}`, {
        description: description, // Send the description entered by the user
      });
      console.log(response.data);
      handleClose(); // Close the modal after successful request
    } catch (error) {
      console.error("Error approving letter request:", error);
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
        <DialogTitle>
          <span className="title">{title}</span>
          <span className="close_btn">
            <IconButton onClick={handleClose}>
              <RxCross1 />
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent>
          <div className="task_form">
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <span>Attach File</span>
                <input type="file" />
              </div>
            </div>
            <div className="full-width" style={{ width: "100%" }}>
              <span>Description....</span>
              <textarea
                cols="30"
                rows="5"
                value={description}
                onChange={handleDescriptionChange} // Update description on change
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
