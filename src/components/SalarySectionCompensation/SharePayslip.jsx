
import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { BiSolidDownArrow } from "react-icons/bi";
import "./index.css";
import CustomDatePicker from "../CustomDatePicker/DatePicker";

function SharePayslip({title, handleClose,open}) {
    const uploadRef = useRef();
    const [nextClicked, setNextClicked] = useState(false);

    const handleShare = async () => {
      try {
          // Your payload for the backend request
          const payload = {
              // Populate with the required data
          };

          const response = await fetch(`${process.env.REACT_APP_NODE_URL}/salary/share_slip`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
          });

          if (response.ok) {
              // Handle success response from the backend
              console.log("Payslips shared successfully");
          } else {
              // Handle error response from the backend
              console.error("Failed to share payslips");
          }
      } catch (error) {
          console.error("Error sharing payslips:", error);
      }
      onsubmit();
  };
  
    return (
    <div>

    {!nextClicked && <Dialog
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
        <div className="inputShare_container">
                <div>

                    <input type="radio" name="period" id="singlePeriod" />
                    <span>Select salary Period</span>
                    {/* <label htmlFor="singlePeriod"></label> */}
                    <CustomDatePicker
                        onChangeDate={() => {}}/>
                </div>
                <div>
                    <div >
                        <input type="radio" name="period" id="singlePeriod" />
                        <span>Select all the salary period in the date range</span>
                    </div>
                    <div className="range_period">

                        <div>
                            <div>Start Date</div>
                            <CustomDatePicker 
                            onChangeDate={() => {}}/>
                        </div>
                        <div>
                            <div>End Date</div>
                            <CustomDatePicker 
                                onChangeDate={() => {}}/>
                        </div>
                    </div>
                    {/* <label htmlFor="singlePeriod"></label> */}
                    
                </div>
                
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={()=>setNextClicked(true)} className="dialogue_btn fst_btn">
          Next
        </Button>
        <Button onClick={handleClose} className="dialogue_btn scnd_btn">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>}


    {nextClicked && <Dialog
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
        <div className="inputShare_container">
                <div>

                    <input type="radio" name="period" id="singlePeriod" />
                    <span>Share the pay slips for selected Employees</span>
                    {/* <label htmlFor="singlePeriod"></label> */}
                    <select name="" id="">
                        <option>select Employees</option>
                        <option>Anjali Narwade</option>
                        <option>Anjali Narwade</option>
                        <option>Anjali Narwade</option>
                        <option>Anjali Narwade</option>
                    </select>
                </div>
                <div>
                    <div >
                        <input type="radio" name="period" id="singlePeriod" />
                        <span>Share the pay slips for the All Employees</span>
                    </div>
                
                    {/* <label htmlFor="singlePeriod"></label> */}
                    
                </div>
                
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleShare} className="dialogue_btn fst_btn">
          Share
        </Button>
        <Button onClick={handleClose} className="dialogue_btn scnd_btn">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>}
    </div>

  )
}

export default SharePayslip