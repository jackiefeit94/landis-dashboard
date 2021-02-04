import React from 'react'

const Form = props => {
  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const disable = () => {
    if (
      !props.state.name_first ||
      !props.state.name_last ||
      !props.state.email ||
      !props.state.phone
    ) {
      return true
    } else if (props.state.phone.length !== 10) {
      return true
    } else if (isNaN(props.state.phone)) {
      return true
    } else if (!emailIsValid(props.state.email)) {
      return true
    }
    return false
  }
  return (
    <div id="form">
      <form onSubmit={props.handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="name_first"
          value={props.state.name_first}
          onChange={props.handleChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="name_last"
          value={props.state.name_last}
          onChange={props.handleChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={props.state.email}
          onChange={props.handleChange}
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={props.state.phone}
          onChange={props.handleChange}
        />
        <button id="submit" type="submit" disabled={disable()}>
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Form
