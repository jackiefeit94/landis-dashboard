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
    this.state = {
      search: ''
    }
    this.orderByName = this.orderByName.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filter = this.filter.bind(this)
  }

  async componentDidMount() {
    await this.props.getClients()
  }

  handleChange(e) {
    this.setState({search: e.target.value})
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

  filter(str, clients) {
    let length = str.length
    let newClients = clients.filter(client => {
      let clientSlice = client.name_last.slice(0, length)
      return clientSlice.toLowerCase() === str.toLowerCase()
    })
    return newClients
  }

  render() {
    let clients
    if (this.props.clients) {
      clients = this.orderByName(this.props.clients)
      clients = this.filter(this.state.search, this.props.clients)
    }
    return (
      <div>
        <div id="search">
          <h2 id="searchText">SEARCH BY LAST NAME</h2>
          <input onChange={this.handleChange} id="searchInput" />
        </div>
        <div className="cardContainer">
          {this.props.clients ? (
            clients.map(client => {
              return (
                <SingleClient
                  key={client.id}
                  id={client.id}
                  name_first={client.name_first}
                  name_last={client.name_last}
                  email={client.email}
                  phone={client.phone}
                  picture={client.picture}
                  progress={client.progress}
                />
              )
            })
          ) : (
            <div />
          )}
        </div>
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
