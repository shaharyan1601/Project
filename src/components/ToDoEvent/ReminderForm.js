import React from 'react';
import "./index.css";

class ReminderForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <dialog open className="dialog">
                    <h4 className="reminder_style">Add Reminder</h4>
                    <div className="reminder-wrap">
                        <div className="reminder_html">
                            <div className="reminder_event">
                                <input id="tab-1" type="radio" name="tab" className="event" />
                                <label htmlFor="tab-1" className="tab">Event</label>
                                <input id="tab-2" type="radio" name="tab" className="reminder" defaultChecked />
                                <label htmlFor="tab-2" className="tab">Reminder</label>
                            </div>
                            <form action="/" method="post">
                                <div className="top-row">
                                    <div className="field-wrap">
                                        <label htmlFor="title">Reminder Title</label>
                                        <input placeholder="Enter your text here" type="text" id="title" />
                                    </div>
                                    <div className="title_priority"> 
                                        <div className="field-wrap">
                                            <label htmlFor="recursion">Recursion</label><br />
                                            <select placeholder="Once" name="recursion" id="recursion" className="select">
                                                <option value="once">once</option>
                                                <option value="B">B</option>
                                            </select>
                                            <label htmlFor="time">Time</label><br />
                                            <input type="time" id="time" name="time" />
                                            <label htmlFor="date">Date</label><br />
                                            <input type="date" id="date" name="event" />
                                        </div>
                                        <div className="field-wrap1">
                                            <label>Members Email</label>
                                            <input placeholder="Add members if any" type="email" />
                                        </div>  
                                    </div>
                                    <div className="field-wrap1">
                                        <label htmlFor="Description">Description</label>
                                        <textarea placeholder="Add Description of the event" name="description" id="description" cols="70" rows="10"></textarea>
                                    </div>
                                    <div className="field-wrapB">
                                        <button type="submit" className="button-style">Save</button>
                                        <button type="submit" className="button">Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </React.Fragment>
        );
    }
}

export default ReminderForm;
