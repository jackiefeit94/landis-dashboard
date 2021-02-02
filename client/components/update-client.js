import React from 'react'
import Form from './add-update-form'
// import {postSingleProject} from '../redux/singleProject'
import {connect} from 'react-redux'

class UpdateClient extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  // async handleSubmit(event) {
  //   event.preventDefault()
  //   await this.props.postSingleProject(this.state)
  //   this.setState({title: ''})
  // }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   })
  // }

  render() {
    return (
      <div id="formContainer">
        <Form
        // state={this.state}
        // handleSubmit={this.handleSubmit}
        // handleChange={this.handleChange}
        />
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     postSingleProject: (project) => dispatch(postSingleProject(project)),
//   }
// }

export default connect(null, null)(UpdateClient)
