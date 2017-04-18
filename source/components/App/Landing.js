import React, { Component } from 'react'
import axios from 'axios'
import ProjectListContainer from '../ProjectsList/ProjectListContainer'
import LoginContainer from '../Login/LoginContainer'
import componentErrorHandler from '../utilities/componentErrorHandler'

export default class Landing extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get( `${__HOST__}/session` ) // eslint-disable-line
      .then( response => {
        if ( response.data.userId ) {
          this.setState({ userId: response.data.userId })
        }
      })
      .catch( componentErrorHandler( 'App' ) )
  }

  render() {
    const userId = this.state.userId
    const loginOrProjectsList = userId ?
      <ProjectListContainer userId={ userId } /> :
      <LoginContainer userId={ userId } />

    return (
      <div>
        { loginOrProjectsList }
      </div>
    )
  }
}
