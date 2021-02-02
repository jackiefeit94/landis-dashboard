import React from 'react'
import {connect} from 'react-redux'
import {fetchClients} from '../store/client'
import SingleClient from './single-client'

/**
 * COMPONENT
 */
class Dashboard extends React.Component {
  constructor() {
    super()
    this.orderByName = this.orderByName.bind(this)
  }

  async componentDidMount() {
    await this.props.getClients()
  }

  orderByName(accounts) {
    accounts.sort(function(a, b) {
      var nameA = a.name_last.toUpperCase()
      var nameB = b.name_last.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }

  render() {
    this.orderByName(this.props.clients)
    return (
      <div id="cardContainer">
        {this.props.clients ? (
          this.props.clients.map(client => {
            return (
              <SingleClient
                key={client.id}
                id={client.id}
                name_first={client.name_first}
                name_last={client.name_last}
                email={client.email}
                phone={client.phone}
                picture={client.picture}
              />
            )
          })
        ) : (
          <div />
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    clients: state.clients
  }
}

const mapDispatch = dispatch => {
  return {
    getClients: () => {
      dispatch(fetchClients())
    }
  }
}

export default connect(mapState, mapDispatch)(Dashboard)
