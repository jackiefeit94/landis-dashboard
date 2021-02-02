import React from 'react'
import Form from './add-update-form'
import {putClient} from '../store/client'
import {connect} from 'react-redux'

class UpdateClient extends React.Component {
  constructor() {
    super()
    this.state = {
      name_first: '',
      name_last: '',
      email: '',
      phone: ''
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
    this.setState({name_first: '', name_last: '', email: '', phone: ''})
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
