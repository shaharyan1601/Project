import React, { useState } from "react";
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
import CustomSelect from "./CustomDropdown";
import axios from 'axios';

export default function UpdateModal({ open, handleClose, title, selectedRow }) {
  const [formValue, setFormValue] = useState({
    taskname: selectedRow.taskname,
    priority: selectedRow.priority,
    startDate: selectedRow.startDate,
    deadline: selectedRow.deadline,
    assignBy: selectedRow.assignBy,
    assignTo: selectedRow.assignTo,
    description: selectedRow.description,
  });

  const handleUpdateTask = async () => {
    try {
      const updateId = selectedRow;
      await axios.put(`${process.env.REACT_APP_NODE_URL}todo/task/update/${updateId}`, formValue);
      handleClose();
    } catch (error) {
      console.error('Error updating task:', error);
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
          <span className="dialoguetitle">{title}</span>
          <span className="close_btn">
            <IconButton onClick={handleClose}>
              <RxCross1 />
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent>
          <div className="task_form">
            <div className="task_field">
              <span>Add task name</span>
              <input
                type="text"
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
                  <span>Add task name</span>
                  <select
                    id="customSelect"
                    className="custom-select"
                    value={formValue.priority}
                    onChange={(e) =>
                      setFormValue({ ...formValue, priority: e.target.value })
                    }
                  >
                    <option value="high">High</option>
                    <option value="low">Low</option>
                  </select>
                  <div
                    className={
                      selectedRow !== undefined
                        ? "with_label"
                        : "custom-select-icon"
                    }
                  >
                    <BiSolidDownArrow className="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <span>Start Date</span>
                <CustomDatePicker
                  value={formValue.startDate}
                  onChangeDate={(date) =>
                    setFormValue({ ...formValue, startDate: date })
                  }
                />
              </div>
            </div>
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <span>Deadline</span>
                <CustomDatePicker
                  placeHolderText="Deadline"
                  value={formValue.deadline}
                  onChangeDate={(date) =>
                    setFormValue({ ...formValue, deadline: date })
                  }
                />
              </div>
            </div>
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <div className="custom-select">
                  <span>Assign by</span>
                  <select
                    id="customSelect"
                    className="custom-select"
                    value={formValue.assignBy}
                    onChange={(e) =>
                      setFormValue({ ...formValue, assignBy: e.target.value })
                    }
                  >
                    <option value="option1">James</option>
                    <option value="option2">Option 3</option>
                  </select>
                  <div className="with_label">
                    <BiSolidDownArrow className="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-select-container">
              <div className="custom-select-wrapper">
                <div className="custom-select-img">
                  <span>Assign To</span>
                  {/* <select
                    id="customSelect"
                    className="custom-select"
                    value={formValue.assignTo}
                    onChange={(e) =>
                      setFormValue({ ...formValue, assignTo: e.target.value })
                    }
                  >
                    <option value="option1">
                      <div className="stack-container">
                        {formValue.assignTo.map((datum, index) => (
                          <img
                            src={`${datum.img}`}
                            alt=""
                            className="stack-img stacked-img"
                            style={{ "--index": index }}
                          />
                        ))}
                      </div>
                    </option>
                    <option value="option2">Option 3</option>
                  </select> */}
                  <CustomSelect options={formValue.assignTo} />
                  <div className="with_label">
                    <BiSolidDownArrow className="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="full-width">
              <span>Description</span>
              <textarea
                cols="30"
                rows="10"
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
            onClick={handleUpdateTask}
            className="dialogue_btn fst_btn"
          >
            Update
          </Button>
          <Button onClick={handleClose} className="dialogue_btn scnd_btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
