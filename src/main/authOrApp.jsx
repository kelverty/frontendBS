
import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './app'
import Auth from '../auth/auth'
import { validateToken } from '../auth/authActions'
class AuthOrApp extends Component {
  componentWillMount() {
  if(this.props.auth.user) {
  this.props.validateToken('12222')
  }
  }
  render() {
  const { user, validToken } = this.props.auth
  if(user && validToken) {

  return <App>{this.props.children}</App>
  } else if(!user) {
  return <Auth />
  } else {
  return false
  }
  }
}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)