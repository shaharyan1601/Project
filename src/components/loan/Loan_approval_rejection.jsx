import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

export default function Loan_approval_rejection({ open, handleClose, type }) {
  useEffect(() => {
    console.log(type)
  }, [type])
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
          <span className="dialoguetitle">Loan Follow Up</span>
          <span className="close_btn">
            <IconButton onClick={handleClose}>
              <RxCross1 />
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent>
          <div style={{ width: "100%", display: 'flex', flexDirection: "column", gap: 10 }}>
            <div>
              <label htmlFor="input">Demo Label</label>
              <input label="Demo Label" id="input" style={{ width: "100%", padding: 5, border: "1px solid rgb(204, 204, 204)", borderRadius: 5 }} />
            </div>
            <div>
              <label htmlFor="input">Demo Label</label>
              <textarea placeholder="Description" style={{ width: "100%", padding: 5, border: "1px solid rgb(204, 204, 204)", borderRadius: 5 }}></textarea>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            autoFocus
            onClick={handleClose}
            className="dialogue_btn fst_btn"
          >
            Approve
          </button>
          <Button onClick={handleClose} className="dialogue_btn scnd_btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
