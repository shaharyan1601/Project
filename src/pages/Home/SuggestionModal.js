import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { BiSolidDownArrow } from "react-icons/bi";
import "./request.css";
import CustomDatePicker from "components/CustomDatePicker/DatePicker";

export default function SuggestionModal({ open, handleClose, title }) {
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
              <span> From</span>
              <CustomDatePicker
                placeHolderText="Start Date"
                onChangeDate={() => {}}
              />
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <span>To</span>
              <CustomDatePicker
                placeHolderText="Deadline"
                onChangeDate={() => {}}
              />
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
            <span> Time Off Category</span>
              <div className="custom-select">
                <select id="customSelect" className="custom-select">
                  <option value="option1">James</option>
                  <option value="option2">Option 3</option>
                </select>
                <div className="custom-select-icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
            <span> Amount </span>
              <div className="custom-select">
                <select id="customSelect" className="custom-select">
                  <option hidden>Assign to</option>
                  <option value="option1">Option 2</option>
                  <option value="option2">Option 3</option>
                </select>
                <div className="custom-select-icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
          <span> Reason for Absence</span>
            <textarea
              cols="50"
              rows="5"
            ></textarea>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} className="modal_btn first_btn">
          Submit
        </Button>
        <Button onClick={handleClose} className="modal_btn second_btn">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
