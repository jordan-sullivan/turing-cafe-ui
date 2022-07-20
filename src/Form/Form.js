import React, { Component } from "react"

class Form extends Component {
constructor() {
    super()
    this.state={
        name:"",
        date:"",
        time:"",
        number:0,
    }
}

    handleChange = (event) => {
        const {name, date, time, number} = event.target
        this.setState({ 
            [name]: this.state.name,
            [date]: this.state.date,
            [time]: this.state.time,
            [number]: this.state.number,
         });
    }

    submitReservation = () => {
   
        const newRes = {
            ...this.state
        }
        this.props.addRes(newRes)
        this.setState({
            submittedName: this.state.name,
            submittedTime: this.state.time, 
            submittedDate: this.state.password,
            submittedNumber: this.state.number
        })
        console.log("click")
      
    }

    render() {
        return(
            <form>
                <input
                    type="text"
                    placeholder='Name'
                    name="name"
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />

                <input
                    type="text"
                    placeholder="Date (mm/dd)"
                    name="date"
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />

                <input
                    type="text"
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

                <button onClick={this.submitReservation}>Make Reservation</button>
            </form>
        )
    }
}

export default Form 