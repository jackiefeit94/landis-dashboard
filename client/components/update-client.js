import React from 'react'
import Form from './add-update-form'
import {putClient} from '../store/client'
import {connect} from 'react-redux'
import swal from 'sweetalert'

class UpdateClient extends React.Component {
  constructor() {
    super()
    this.state = {
      name_first: '',
      name_last: '',
      email: '',
      phone: '',
      updated: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.setState({
      name_first: this.props.name_first,
      name_last: this.props.name_last,
      email: this.props.email,
      phone: this.props.phone
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.props.updateClient(this.props.id, this.state)
    this.setState({
      name_first: '',
      name_last: '',
      email: '',
      phone: '',
      updated: true
    })
    swal('You successfully updated this client.', {
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
        {!this.state.updated ? (
          <Form
            state={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        ) : (
          <div />
        )}
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    updateClient: (id, update) => dispatch(putClient(id, update))
  }
}

export default connect(null, mapDispatch)(UpdateClient)
