import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

export default function ChangeModal({
  open,
  handleClose,
  title,
  initialRequestInfo = "",
  initialDescription = "",
  onSubmit,
}) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);
  const [description, setDescription] = useState(initialDescription);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("req_info", requestInfo);
    formData.append("description", description);
    formData.append("file", file);

    try {
      // Send POST request to the backend API endpoint
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}/myinfo/change_request/:id`, formData);
      // Call onSubmit function with response data
      onSubmit(response.data);
      handleClose();
    } catch (error) {
      console.error("Error submitting change request:", error.message);
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
          <div className="survey_form">
            <div className="leave__field textarea">
              <span>Request Info</span>
              <input
                type="text"
                name="requestInfo"
                value={requestInfo}
                onChange={(e) => setRequestInfo(e.target.value)}
              />
            </div>
            <div
              className="leave__field textarea"
              style={{ marginTop: "-1.5vw", marginBottom: "1vw" }}
            >
              <span>Description (Optional)</span>
              <textarea
                rows="6"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="leave__field textarea" style={{ marginTop: "3.5vw" }}>
              <span>Attach the Proof Document</span>
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} className="dialogue_btn fst_btn">
            Send
          </Button>
          <Button onClick={handleClose} className="dialogue_btn scnd_btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
