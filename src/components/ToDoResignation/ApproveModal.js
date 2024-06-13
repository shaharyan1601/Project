import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { BiSolidDownArrow } from "react-icons/bi";
import "./index.css";
import CustomDatePicker from "../CustomDatePicker/DatePicker";
import axios from "axios";

export default function ApproveModal({
  open,
  handleClose,
  title,
  leaveId,
}) {
  const [approvalDate, setApprovalDate] = React.useState("");
  const [lastWorkingDay, setLastWorkingDay] = React.useState("");
  const [reason, setReason] = React.useState("");

  const handleSend = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_NODE_URL}todo/resignation/action/approve/${leaveId}`,
        {
          approval_date: approvalDate,
          last_workday: lastWorkingDay,
          reason: reason,
        }
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error("Error approving resignation:", error);
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
                <span>Add Approval Date</span>
                <CustomDatePicker onChangeDate={setApprovalDate} />
              </div>
            </div>

            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <span>Tentative last working day</span>
                <CustomDatePicker onChangeDate={setLastWorkingDay} />
              </div>
            </div>
            <div className="full-width" style={{ width: "100%" }}>
              <span>Description....</span>
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
