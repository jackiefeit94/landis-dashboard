import React from 'react'
import Form from './add-update-form'
import {postClient} from '../store/client'
import {connect} from 'react-redux'
import {ToastContainer, toast} from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'

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
    this.notify = this.notify.bind(this)
  }

  notify() {
    toast('You successfully added a client!')
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
    this.setState({name_first: '', name_last: '', email: '', phone: '', id: ''})
    this.notify()
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
        <ToastContainer />
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
