import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";

export default function WishesModal({ open, handleClose, title }) {
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
          <span className="dialoguetitle">{title}</span>
          <span className="close_btn">
            <IconButton onClick={handleClose}>
              <RxCross1 />
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent>
        <div className="survey_form">
            <div className="leave__field textarea">
                <span>Send to</span>
                <input type="text"/>   
            </div>
            <div className="leave__field textarea">
                <span>Subject</span>
                <input type="text"/> 
            </div>
            <div className="leave__field textarea">
                <span>Attach File</span>
                <input type="file"/>
            </div>
          
        </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className="dialogue_btn fst_btn"
          >
            Send
          </Button>
          <Button onClick={handleClose} className="dialogue_btn scnd_btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
