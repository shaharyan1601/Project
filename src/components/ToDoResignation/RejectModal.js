import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import "./index.css";
import axios from "axios";

export default function RejectModal({ open, handleClose, title, leaveId }) {
  const [reason, setReason] = useState("");

  const handleSend = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_NODE_URL}todo/resignation/action/reject/${leaveId}`,
        {
          reason: reason,
        }
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error("Error rejecting resignation:", error);
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
            <div className="full-width" style={{ width: "100%" }}>
              <span>Enter your reason for rejecting</span>
              <textarea
                cols="30"
                rows="5"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSend} className="modal_btn first_btn">
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
