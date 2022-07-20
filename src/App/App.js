import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

addReservation = (newRes) => {
  this.setState({reservations: [...this.state.reservations, newRes]})
}

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => {
      console.log("DATA", data)
      this.setState({reservations: data})
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
