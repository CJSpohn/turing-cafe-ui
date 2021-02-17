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

  render() {
    return (
      <form>
        <input
          type="text"
          placeHolder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />  
      </form>
    )
  }
}

export default ResyForm
