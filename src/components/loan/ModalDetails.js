import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

export default function ModalDetails({open, handleClose}) {
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
          <span className="title">Leave Request</span>
          <span className="close_btn">
            <IconButton onClick={handleClose}>
              <RxCross1 />
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent>
          <h4>Casual Leave</h4>
          <div className="leave_details">
            <div className="employee_leave_details">
              <h6 className="employee_name">Myra Jadhav</h6>
              <span className="brief_reason">
                {" "}
                2 days of casual leave (24/07/2023-25/07/2023)
              </span>
              <p className="calender_view">View in calender</p>
              <div className="reason">
                Going to home town for attending sister marriage......
              </div>
              <textarea
                className="comments"
                type="text"
                placeholder="Add your comment....."
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className="modal_btn first_btn"
          >
            Approve
          </Button>
          <Button onClick={handleClose} className="modal_btn second_btn">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
