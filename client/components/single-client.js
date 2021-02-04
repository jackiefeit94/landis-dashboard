import React from 'react'
import {connect} from 'react-redux'
import {deleteClient} from '../store/client'
import {Link} from 'react-router-dom'
import {Popup} from 'reactjs-popup'
import UpdateClient from './update-client'
import Progress from './charts/progress'
import swal from 'sweetalert'

/**
 * COMPONENT
 */
const SingleClient = props => {
  const deleteHandler = async event => {
    event.preventDefault()
    const id = event.target.value
    await swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this client.',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        props.removeClient(id)
        swal('Your client has been deleted.', {
          icon: 'success'
        })
      } else {
        swal('Your client has not been deleted.')
      }
    })
  }

  return (
    <div id="singleCard">
      <div id="images">
        <img alt="profile" src={props.picture} />
        <Progress id={props.id} progress={props.progress} />
      </div>
      <div id="info">
        <p>
          {props.name_first} {props.name_last}
        </p>

        <a href={`mailto:${props.email}`}>{props.email}</a>
        <p> {props.phone}</p>
        <div id="singleCardButtons">
          <Popup
            id="popup"
            trigger={<button> UPDATE</button>}
            position="right center"
          >
            <UpdateClient
              id={props.id}
              name_first={props.name_first}
              name_last={props.name_last}
              email={props.email}
              phone={props.phone}
            />
          </Popup>
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
