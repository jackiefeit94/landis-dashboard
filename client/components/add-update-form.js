import React from 'react'

const Form = props => {
  // const disable = () => {
  // 	if (!props.state.title) {
  // 		return true;
  // 	}
  // 	return false;
  // };
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
        <button id="submit" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Form

//on button
//disabled={disable()}
