import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

export default function PaidOffModal({ open, handleClose, title, leaveData }) {
    const [comment, setComment] = useState("");
    
    const handleAction = async (action) => {
        try {
            const response = await axios.post(
                `http://localhost:5000/salary/paidtime_off/${action}/${leaveData._id}`,
                { comment }
            );
            console.log(response.data);
            handleClose();
        } catch (error) {
            console.error("Error:", error);
        }
    };

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
                    <span className="title">{title}</span>
                    <span className="close_btn">
                        <IconButton onClick={handleClose}>
                            <RxCross1 />
                        </IconButton>
                    </span>
                </DialogTitle>
                <DialogContent>
                    {leaveData && (
                        <>
                            <h4>{leaveData.category} Leave</h4>
                            <div className="leave_details">
                                <div className="employee_leave_details">
                                    <h6 className="employee_name">{leaveData.username}</h6>
                                    <span className="brief_reason">
                                        {leaveData.amount} hours leave request ({new Date(leaveData.from).toLocaleDateString()})
                                    </span>
                                    <p className="calender_view">View in calendar</p>
                                    <div className="reason">{leaveData.reason}</div>
                                    <textarea
                                        className="comments"
                                        type="text"
                                        placeholder="Add your comment....."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={() => handleAction("approve")}
                        className="modal_btn first_btn"
                    >
                        Approve
                    </Button>
                    <Button
                        onClick={() => handleAction("reject")}
                        className="modal_btn second_btn"
                    >
                        Reject
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
