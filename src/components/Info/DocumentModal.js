import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

export default function DocumentModal({
  title,
  okBtn,
  cancelBtn,
  content,
  open,
  handleClose,
}) {
  return (
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
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} className="dialogue_btn fst_btn">
          {okBtn}
        </Button>
        <Button onClick={handleClose} className="dialogue_btn scnd_btn">
          {cancelBtn}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
