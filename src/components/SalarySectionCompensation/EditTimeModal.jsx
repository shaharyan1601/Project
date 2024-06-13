import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";

export default function EditTimeModal({ open, handleClose }) {
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
                    <span className="dialoguetitle">Edit Time</span>
                    <span className="close_btn">
                        <IconButton onClick={handleClose}>
                            <RxCross1 />
                        </IconButton>
                    </span>
                </DialogTitle>
                <DialogContent>
                    <h1 style={{ fontSize: 16 }}>MapBook(24/06/2023)</h1>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-around",
                            gap: 10,
                            marginTop : 20
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="input">Total Time</label>
                            <input
                                label="Demo Label"
                                id="input"
                                style={{
                                    padding: 5,
                                    border: "1px solid rgb(204, 204, 204)",
                                    borderRadius: 5,
                                    width: 100,
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", gap: 10 }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="input">Start Time</label>
                                <input
                                    label="Demo Label"
                                    id="input"
                                    style={{
                                        padding: 5,
                                        border: "1px solid rgb(204, 204, 204)",
                                        borderRadius: 5,
                                        width: 100,
                                    }}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="input">End Time</label>
                                <input
                                    label="Demo Label"
                                    id="input"
                                    style={{
                                        padding: 5,
                                        border: "1px solid rgb(204, 204, 204)",
                                        borderRadius: 5,
                                        width: 100,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
                    >
                        <label htmlFor="input">Total Time</label>
                        <textArea
                            label="Demo Label"
                            id="input"
                            style={{
                                padding: 5,
                                border: "1px solid rgb(204, 204, 204)",
                                borderRadius: 5,
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                        <label for="tags">Tags</label>
                        <select name="cars" id="tags" style={{ padding: 5, borderRadius: 5, border: "1px solid rgb(204, 204, 204)", }}>
                            <option value="volvo">UI Design</option>
                            <option value="saab">Back-End</option>
                            <option value="mercedes">Front-End</option>

                        </select>
                    </div>
                </DialogContent>
                <DialogActions>
                    <button
                        autoFocus
                        onClick={handleClose}
                        style={{ marginTop: 0 }}
                        className="dialogue_btn fst_btn"
                    >
                        Save
                    </button>
                    <Button onClick={handleClose} className="dialogue_btn scnd_btn">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
