import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import { RiCloseLine } from "react-icons/ri";
import { BiSolidDownArrow } from "react-icons/bi";
import "./AddEventModal.css"; // Import your CSS file

export default function EventForm({ open, handleClose, title }) {
    // State variables for event form fields
    const [eventTitle, setEventTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [membersEmail, setMembersEmail] = useState('');
    const [description, setDescription] = useState('');

    // State variables for reminder form fields
    const [reminderTitle, setReminderTitle] = useState('');
    const [recursion, setRecursion] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [reminderDate, setReminderDate] = useState('');
    const [reminderMembersEmail, setReminderMembersEmail] = useState('');
    const [reminderDescription, setReminderDescription] = useState('');

    // State variable to toggle between event and reminder forms
    const [activeTab, setActiveTab] = useState('event');

    // Function to handle event form submission
    const handleEventSubmit = (e) => {
        e.preventDefault();
        // Handle event form submission logic here
        console.log("Event Form Submitted");
    }

    // Function to handle reminder form submission
    const handleReminderSubmit = (e) => {
        e.preventDefault();
        // Handle reminder form submission logic here
        console.log("Reminder Form Submitted");
    }

    return (
        <Dialog
            sx={{
                "& .MuiDialog-paper": {
                    width: "100%",
                    maxHeight: 600, // Increase the maxHeight value as needed
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
                        <RiCloseLine />
                    </IconButton>
                </span>
            </DialogTitle>
            <DialogContent>
                <div className="task_form">
                    <div className="event_reminder">
                        <input
                            id="tab-1"
                            type="radio"
                            name="tab"
                            className="event"
                            checked={activeTab === 'event'}
                            onChange={() => setActiveTab('event')}
                        />
                        <label htmlFor="tab-1" className="tab">Event</label>
                        <input
                            id="tab-2"
                            type="radio"
                            name="tab"
                            className="reminder"
                            checked={activeTab === 'reminder'}
                            onChange={() => setActiveTab('reminder')}
                        />
                        <label htmlFor="tab-2" className="tab">Reminder</label>
                    </div>
                    {activeTab === 'event' &&
                        <form onSubmit={handleEventSubmit}>
                            <div className="top-row">
                                <div className="field-wrap">
                                    <label htmlFor="">Event Title</label>
                                    <input type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
                                </div>
                                <div className="field-wrap">
                                    <label>Event Priority</label>
                                    <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />
                                </div>
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="appt">Time Frame</label>
                                <input type="time" id="appt" name="appt" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                                <input type="time" id="appt" name="appt" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="event">Date</label>
                                <input type="date" id="event" name="event" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                            </div>
                            <div className="field-wrap">
                                <label>Members Email</label>
                                <input type="email" value={membersEmail} onChange={(e) => setMembersEmail(e.target.value)} />
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="Description">Description</label>
                                <textarea placeholder="Add Description of the event" name="description" id="description" cols="70" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                            <div className="field-wrapB">
                                <Button type="submit" className="modal_btn first_btn">
                                    Create Event
                                </Button>
                                <Button onClick={handleClose} className="modal_btn second_btn">
                                    Close
                                </Button>
                            </div>
                        </form>
                    }
                    {activeTab === 'reminder' &&
                        <form onSubmit={handleReminderSubmit}>
                            <div className="top-row">
                                <div className="field-wrap">
                                    <label htmlFor="title">Reminder Title</label>
                                    <input placeholder="Enter your text here" type="text" id="title" value={reminderTitle} onChange={(e) => setReminderTitle(e.target.value)} />
                                </div>
                                <div className="field-wrap">
                                    <label htmlFor="recursion">Recursion</label><br />
                                    <select placeholder="Once" name="recursion" id="recursion" className="select" value={recursion} onChange={(e) => setRecursion(e.target.value)}>
                                        <option value="once">once</option>
                                        <option value="B">B</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="time">Time</label><br />
                                <input type="time" id="time" name="time" value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} />
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="date">Date</label><br />
                                <input type="date" id="date" name="event" value={reminderDate} onChange={(e) => setReminderDate(e.target.value)} />
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="Description">Description</label>
                                <textarea placeholder="Add Description of the event" name="description" id="description" cols="70" rows="10" value={reminderDescription} onChange={(e) => setReminderDescription(e.target.value)}></textarea>
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="email">Members Email</label>
                                <input placeholder="Add members if any" type="email" value={reminderMembersEmail} onChange={(e) => setReminderMembersEmail(e.target.value)} />
                            </div>
                            <div className="field-wrapB">
                                <Button type="submit" className="modal_btn first_btn">
                                    Create Reminder
                                </Button>
                                <Button onClick={handleClose} className="modal_btn second_btn">
                                    Close
                                </Button>
                            </div>
                        </form>
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
}
