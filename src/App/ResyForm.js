import React from 'react';
import './ResyForm.css';

class ResyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', guests: ''  });
  }

  submitReservation = event => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newRes)
    this.clearInputs()
  }

  render() {
    return (
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Number of guests"
          name="guests"
          value={this.state.guests}
          onChange={this.handleChange}
        />
        <button className="button" onClick={this.submitReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default ResyForm