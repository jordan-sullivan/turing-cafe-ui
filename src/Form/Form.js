import React, { Component } from "react"

class Form extends Component {


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitReservation() {
        
    }

    render() {
        return(
            <form>
                <input
                    type="name"
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />

                <input
                    type="date"
                    placeholder="Date (mm/dd)"
                    name="date"
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />

                <input
                    type="time"
                    placeholder="Time"
                    name="time"
                    value={this.state.time}
                    onChange={event => this.handleChange(event)}
                />

                <input
                    type="number"
                    placeholder="Number of Guests"
                    name="number"
                    value={this.state.number}
                    onChange={event => this.handleChange(event)}
                />

                <button onClick={submitReservation}>Make Reservation</button>
            </form>
        )
    }
}

export default Form 