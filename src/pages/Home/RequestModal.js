import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import axios from "axios";
import CustomDatePicker from "components/CustomDatePicker/DatePicker";

export default function RequestModal({ open, handleClose, title, onSubmit }) {
  const [formData, setFormData] = useState({
    category: "",
    from: "",
    to: "",
    amount: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}/home/requesttimeoff`, formData);
      console.log(response.data);
      if (onSubmit) {
        onSubmit(response.data);
      }
      handleClose();
    } catch (error) {
      console.error("Error submitting request:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

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
        <span className="close_btn" style={{color:"black"}}>
          <IconButton onClick={handleClose}>
            <RxCross1 />
          </IconButton>
        </span>
      </DialogTitle>
      <DialogContent>
        <div className="task_form" style={{marginLeft:"1rem"}}>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <span> From</span>
              <CustomDatePicker
                placeHolderText="Start Date"
                onChangeDate={(date) => setFormData({ ...formData, from: date })}
              />
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <span>To</span>
              <CustomDatePicker
                onChangeDate={(date) => setFormData({ ...formData, to: date })}
              />
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <span>Time Off Category</span>
              <div className="custom-select">
                <select
                  id="customSelect"
                  className="custom-select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <div className="custom-select-icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <span>Amount</span>
              <div className="custom-select">
                <select
                  id="customSelect"
                  className="custom-select"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                >
                  <option value="">Select amount</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <div className="custom-select-icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <span>Reason for Absence</span>
            <textarea
              cols="50"
              rows="5"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSubmit} className="dialogue_btn fst_btn">
          Submit
        </Button>
        <Button onClick={handleClose} className="dialogue_btn scnd_btn">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
