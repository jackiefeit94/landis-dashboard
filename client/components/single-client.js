import React from 'react'
import {connect} from 'react-redux'
import {deleteClient} from '../store/client'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const SingleClient = props => {
  const deleteHandler = async event => {
    event.preventDefault()
    const id = event.target.value
    await props.removeClient(id)
  }

  return (
    <div id="singleCard">
      <div id="images">
        <img src={props.picture} />
        <img src="https://i.stack.imgur.com/TLLAO.png" />
      </div>
      <div id="info">
        <p>
          Name: {props.name_first} {props.name_last}
        </p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <div id="singleCardButtons">
          <button>
            {' '}
            <Link to="/update">UPDATE</Link>
          </button>

          <button value={props.id} onClick={deleteHandler} id="delete">
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    removeClient: id => {
      dispatch(deleteClient(id))
    }
  }
}

export default connect(null, mapDispatch)(SingleClient)
