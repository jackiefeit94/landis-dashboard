import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}! What would you like to do today?</h3>
      <div id="homeContainer">
        <div id="largerContainer">
          <Link to="/dashboard">
            <h2 id="homeh2">VIEW AND EDIT CLIENTS</h2>
            <img
              id="homeImage"
              src="https://i.ibb.co/Wz0h74C/Jackie-Landis-1.png"
              alt="Single-Client"
              border="0"
            />
          </Link>
        </div>

        <div id="largerContainer">
          <Link to="/add">
            <h2 id="homeh2">ADD A NEW CLIENT</h2>
            <img
              id="homeImage"
              src="https://i.ibb.co/tsHzBVJ/Add-a-new-client.png"
              alt="Add-Client"
              border="0"
            />
          </Link>
        </div>

        <div id="largerContainer">
          <Link to="/overview">
            <h2 id="homeh2">VIEW A DATA OVERVIEW</h2>
            <img
              id="homeImage"
              src="https://i.ibb.co/hgysBvV/Untitled-design-1.png"
              alt="Data-Overview"
              border="0"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
