import React from 'react';
import './reminder.css'; // Import your CSS file

class EventReminderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'event', // 'event' or 'reminder'
        };
    }

    toggleForm = (form) => {
        this.setState({ activeForm: form });
    }

    render() {
        return (
            <React.Fragment>
                <dialog open className="dialog">
                    <h4 className="reminder_style">Add {this.state.activeForm === 'event' ? 'Event' : 'Reminder'}</h4>
                    <div className="reminder-wrap">
                        <div className="reminder_html">
                            <div className="reminder_event">
                                <input id="tab-1" type="radio" name="tab" className="event" checked={this.state.activeForm === 'event'} onChange={() => this.toggleForm('event')} />
                                <label htmlFor="tab-1" className="tab">Event</label>
                                <input id="tab-2" type="radio" name="tab" className="reminder" checked={this.state.activeForm === 'reminder'} onChange={() => this.toggleForm('reminder')} />
                                <label htmlFor="tab-2" className="tab">Reminder</label>
                            </div>
                            {this.state.activeForm === 'event' &&
                                <form action="/" method="post">
                                    <div className="top-row">
                                        {/* Event Form JSX */}
                                    </div>
                                </form>
                            }
                            {this.state.activeForm === 'reminder' &&
                                <form action="/" method="post">
                                    <div className="top-row">
                                        {/* Reminder Form JSX */}
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </dialog>
            </React.Fragment>
        );
    }
}

export default EventReminderForm;
