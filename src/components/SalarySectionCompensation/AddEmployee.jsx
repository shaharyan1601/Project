import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import "./index.css";
import CustomDatePicker from "../CustomDatePicker/DatePicker";

function AddEmployee({ title, handleClose, open }) {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    id: "",
    paidHours: "",
    grossPay: "",
    statutaryPay: "",
    deductions: "",
    netPay: "",
    status: "",
    file:"",
  });
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadRef = useRef();

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setEmployeeData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUploadClick = () => {
    uploadRef.current.click();
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
        <div className="input_container">
          <div>
            <span>Employee Name</span>
            <input
              type="text"
              name="name"
              value={employeeData.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>
          <div>
            <span>Employee ID</span>
            <input
              type="text"
              name="id"
              value={employeeData.id}
              onChange={(e) => handleInputChange(e, "id")}
            />
          </div>
          <div>
            <span>Paid Hours</span>
            <input
              type="text"
              name="paidHours"
              value={employeeData.paidHours}
              onChange={(e) => handleInputChange(e, "paidHours")}
            />
          </div>
          <div>
            <span>Gross Pay</span>
            <input
              type="text"
              name="grossPay"
              value={employeeData.grossPay}
              onChange={(e) => handleInputChange(e, "grossPay")}
            />
          </div>
          <div>
            <span>Statutary Pay</span>
            <input
              type="text"
              name="statutaryPay"
              value={employeeData.statutaryPay}
              onChange={(e) => handleInputChange(e, "statutaryPay")}
            />
          </div>
          <div>
            <span>Deductions</span>
            <input
              type="text"
              name="deductions"
              value={employeeData.deductions}
              onChange={(e) => handleInputChange(e, "deductions")}
            />
          </div>
          <div>
            <span>Net Pay</span>
            <input
              type="text"
              name="netPay"
              value={employeeData.netPay}
              onChange={(e) => handleInputChange(e, "netPay")}
            />
          </div>
          <div>
            <span>Status</span>
            <input
              type="text"
              name="status"
              value={employeeData.status}
              onChange={(e) => handleInputChange(e, "status")}
            />
          </div>
          <div className="full-width" style={{height:"4vw"}}>
            <input type="file" name="file" id="" ref={uploadRef} onChange={handleFileChange} style={{ display: "none" }} />
            <button onClick={handleUploadClick}>UPLOAD</button>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} className="dialogue_btn fst_btn">
          Add
        </Button>
        <Button onClick={handleClose} className="dialogue_btn scnd_btn">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEmployee;
