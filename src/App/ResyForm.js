import React from 'react'

class ResyForm extends React.Component {
  constructor() {
    super()
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

  render() {
    return (
      <form>
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
        <button onClick={this.submitReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default ResyForm
