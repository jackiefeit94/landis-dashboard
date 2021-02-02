import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="nav">
    <nav>
      {isLoggedIn ? (
        <div id="loggedInNav">
          {/* The navbar will show these links after you log in */}
          <div id="leftNav">
            <Link to="/home">HOME</Link>
            <Link to="/dashboard">DASHBOARD</Link>
            <Link to="/overview">OVERVIEW</Link>
            <Link to="/add">ADD CLIENT</Link>
          </div>
          <div id="rightNav">
            <a href="#" onClick={handleClick}>
              LOGOUT
            </a>
          </div>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGN UP</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
