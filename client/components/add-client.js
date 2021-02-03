import React from 'react'
import Form from './add-update-form'
import {postClient} from '../store/client'
import {connect} from 'react-redux'
import swal from 'sweetalert'

class AddClient extends React.Component {
  constructor() {
    super()
    this.state = {
      name_first: '',
      name_last: '',
      email: '',
      phone: '',
      id: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.generateId = this.generateId.bind(this)
  }

  generateId() {
    let chars =
      '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWQXYZ'
    let newId = ''
    for (let i = 0; i <= 31; i++) {
      let randomNum = Math.floor(Math.random() * chars.length)
      let randomChar = chars[randomNum]
      newId += randomChar
      if (i === 7 || i === 11 || i === 15 || i === 19) {
        newId += '-'
      }
    }
    this.setState({id: newId})
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.generateId()
    await this.props.addClient(this.state)
    this.setState({
      name_first: '',
      name_last: '',
      email: '',
      phone: '',
      id: ''
    })
    swal('You successfully added a new client.', {
      button: 'OK',
      icon: 'success'
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div id="formContainer">
        <Form
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        )
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addClient: client => dispatch(postClient(client))
  }
}

export default connect(null, mapDispatch)(AddClient)
