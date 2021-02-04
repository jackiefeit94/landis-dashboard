import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'

/**
 * COMPONENT
 */

class AuthForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.disable = this.disable.bind(this)
    this.emailIsValid = this.emailIsValid.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const formName = evt.target.name
    const email = evt.target.email.value
    const password = evt.target.password.value
    this.props.auth(email, password, formName)
  }

  emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  disable() {
    if (!this.state.password.length || !this.emailIsValid(this.state.email)) {
      return true
    }
    return false
  }

  render() {
    return (
      <div id="login">
        <div id="formContainer">
          <form onSubmit={this.handleSubmit} name={this.props.name}>
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input onChange={this.handleChange} name="email" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input
                onChange={this.handleChange}
                name="password"
                type="password"
              />
            </div>
            <div>
              <button disabled={this.disable()} type="submit">
                {this.props.displayName}
              </button>
            </div>
            {this.props.error &&
              this.props.error.response && (
                <div> {this.props.error.response.data} </div>
              )}
          </form>
        </div>
        <img
          id="landis"
          src="https://resources.landis.com/logos/landscape-fg-primary.svg"
        />
      </div>
    )
  }
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    auth: (email, password, formName) =>
      dispatch(auth(email, password, formName))
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
