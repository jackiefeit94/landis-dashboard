import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Overview = props => {
  return (
    <div>
      <h3>Overview Page!</h3>
      <div id="dataContainer">
        <div id="dataDiv">3 Pie Charts (credit, balance, progress)</div>
        <div id="dataDiv">Bar graph (clients by state)</div>
        <div id="dataDiv">Scatter plot (credit v balance)</div>
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
