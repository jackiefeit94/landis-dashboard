import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Overview = props => {
  return (
    <div>
      <h3>Overview Page!</h3>
      <div id="dataContainer">
        <div id="dataDiv"> Data 1</div>
        <div id="dataDiv"> Data 2</div>
        <div id="dataDiv"> Data 3</div>
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

export default connect(mapState)(Overview)
