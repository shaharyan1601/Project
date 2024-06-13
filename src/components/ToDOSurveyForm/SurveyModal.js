import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import axios from "axios";

export default function SurveyModal({ open, handleClose, title, surveyId }) {
  const [formData, setFormData] = useState({
    comment: "",
    send_to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}todo/survey/update/${surveyId}`, formData);
      console.log(response.data);
      handleClose(); // Close the modal after successful request
    } catch (error) {
      console.error("Error updating survey:", error);
      // Handle error
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
        <span className="close_btn">
          <IconButton onClick={handleClose}>
            <RxCross1 />
          </IconButton>
        </span>
      </DialogTitle>
      <DialogContent>
        <div className="survey_form">
          <div className="custom-select">
            <select
              id="customSelect"
              className="custom-select"
              name="send_to"
              value={formData.send_to}
              onChange={handleChange}
            >
              <option hidden>Send To</option>
              <option value="option1">Option 2</option>
              <option value="option2">Option 3</option>
            </select>
            <div className="survey-select-icon">
              <BiSolidDownArrow className="icon" />
            </div>
          </div>
          <div className="survey_textarea">
            <textarea
              cols="30"
              rows="5"
              placeholder="Add your comment...."
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSend} className="dialogue_btn fst_btn">
          Send
        </Button>
        <Button onClick={handleClose} className="dialogue_btn scnd_btn">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
