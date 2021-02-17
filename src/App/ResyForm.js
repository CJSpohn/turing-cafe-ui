import React from 'react';
import './ResyForm.css';

class ResyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
      error: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '', error: ''});
  }

  verifyInputs = () => {
    if (!this.state.name) {
      return this.setState({
        error: 'Please include a name.'
      })
    } else if (!this.state.date || !this.state.date.includes('/')) {
      return this.setState({
        error: 'Please include a date in the correct format (mm/dd).'
      })
    } else if (!this.state.time || !this.state.date.includes(':')) {
      return this.setState({
        error: 'Please include a time in the correct format (4:15).'
      })
    } else if (!this.state.guests) {
      return this.setState({
        error: 'Please include the number of guests in attendance.'
      })
    }
  }

  submitReservation = event => {
    event.preventDefault();
    const newRes = {
      ...this.state
    }
    newRes.number = parseInt(newRes.number)
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
          placeholder="Time (7:00)"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Number of guests"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className="button" onClick={this.submitReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default ResyForm
