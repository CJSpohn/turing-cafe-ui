import React, { Component } from 'react';
import ResyContainer from './ResyContainer'
import ResyForm from './ResyForm'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addReservation = newRes => {
    this.setState({reservations: [...this.state.reservations, newRes]})
  }

  componentDidMount = async () => {
    const results = await fetch('http://localhost:3001/api/v1/reservations')
    const data = await results.json()
    this.setState({
      reservations: data
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResyForm addReservation={this.addReservation}/>
        <ResyContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
