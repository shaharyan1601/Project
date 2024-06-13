import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import "./index.css";
import CustomDatePicker from "../CustomDatePicker/DatePicker";
import axios from "axios";

export default function NewModal({ open, handleClose, title }) {
  const [formValue, setFormValue] = useState({
    taskname: "",
    priority: "",
    startDate: "",
    deadline: "",
    assignBy: "",
    assignTo: "",
    description: "",
    status: "",
  });

  const [assignToOptions, setAssignToOptions] = useState([]);

  useEffect(() => {
    const fetchAssignToOptions = async () => {
      try {
        const response = await axios.get("/assignto");
        setAssignToOptions(response.data.data);
      } catch (error) {
        console.error("Error fetching assign to options:", error);
      }
    };
    fetchAssignToOptions();
  }, []);

  const handleAssignTask = async () => {
    try {
      await axios.post("/task/assigntask", formValue);
      handleClose();
    } catch (error) {
      console.error("Error assigning task:", error);
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
        <div className="task_form" style={{marginLeft:10}}>
          <div className="task_field">
            <input
              type="text"
              placeholder="Add task name"
              style={{ border: "1px solid #ccc" }}
              value={formValue.taskname}
              onChange={(e) =>
                setFormValue({ ...formValue, taskname: e.target.value })
              }
            />
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <div className="custom-select">
                <select
                  id="customSelect"
                  className="custom-select"
                  value={formValue.priority}
                  onChange={(e) =>
                    setFormValue({ ...formValue, priority: e.target.value })
                  }
                >
                  <option value= ""  disabled hidden >Priority</option>
                  <option value="high">High</option>
                  <option value="low">Low</option>
                </select>
                <div className="custom-select-icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <CustomDatePicker
                placeHolderText="Start Date"
                onChangeDate={(date) =>
                  setFormValue({ ...formValue, startDate: date })
                }
              />
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <CustomDatePicker
                placeHolderText="Deadline"
                onChangeDate={(date) =>
                  setFormValue({ ...formValue, deadline: date })
                }
              />
            </div>
          </div>
          <div className="custom-select-container">
            <div className="custom-select-wrapper">
              <div className="custom-select">
                <select
                  id="customSelect"
                  className="custom-select"
                  value={formValue.assignBy}
                  onChange={(e) =>
                    setFormValue({ ...formValue, assignBy: e.target.value })
                  }
                >
                  <option hidden>Assign by</option>
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
              <div className="custom-select">
                <select
                  id="customSelect"
                  className="custom-select"
                  value={formValue.assignTo}
                  onChange={(e) =>
                    setFormValue({ ...formValue, assignTo: e.target.value })
                  }
                >
                  <option hidden>Assign to</option>
                  {assignToOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="custom-select-icon">
                  <BiSolidDownArrow className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <textarea
              cols="30"
              rows="7"
              placeholder="Description...."
              value={formValue.description}
              onChange={(e) =>
                setFormValue({ ...formValue, description: e.target.value })
              }
            ></textarea>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleAssignTask}
          className="dialogue_btn fst_btn"
        >
          Add
        </Button>
        <Button onClick={handleClose} className="dialogue_btn scnd_btn">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
