import React from 'react';
import "./index.css";

class EventForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <dialog open>
                    <div className="tab-content">
                        <h2>Add Event</h2>
                        <button type="submit">X</button>
                        <div className="form">
                            <div className="tab-group">
                                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                                <label htmlFor="tab-1" className="tab">Event</label>
                                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                                <label htmlFor="tab-2" className="tab">Reminder</label>
                            </div>

                            <form action="/" method="dialog">
                                <div className="top-row">
                                    <div className="field-wrap">
                                        <label htmlFor="">Event Title</label>
                                        <input type="text" />
                                    </div>
                                    <div className="field-wrap">
                                        <label>Event Priority</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                
                                <div className="field-wrap">
                                    <label htmlFor="appt">Time Frame</label>
                                    <input type="time" id="appt" name="appt" />
                                    <input type="time" id="appt" name="appt" />
                                </div>

                                <div className="field-wrap">
                                    <label htmlFor="event">Date</label>
                                    <input type="date" id="event" name="event" />
                                </div>

                                <div className="field-wrap">
                                    <label>Members Email</label>
                                    <input type="email" />
                                </div>

                                <div className="field-wrap">
                                    <label htmlFor="Description">Description</label>
                                    <textarea placeholder="Add Description of the event" name="description" id="description" cols="70" rows="10"></textarea>
                                </div>

                                <div className="field-wrap">
                                    <button type="submit" className="button">Create Event</button>
                                    <button type="submit" className="button">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </React.Fragment>
        );
    }
}

export default EventForm;
