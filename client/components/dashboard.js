import React from 'react'
import {connect} from 'react-redux'
import {fetchClients} from '../store/client'
import {SingleClient} from './single-client'

/**
 * COMPONENT
 */
class Dashboard extends React.Component {
  async componentDidMount() {
    await this.props.getClients()
  }

  render() {
    return (
      <div id="cardContainer">
        {this.props.clients ? (
          this.props.clients.map(client => {
            // replace with single card
            return (
              <SingleClient
                key={client.id}
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
