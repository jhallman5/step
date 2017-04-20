/* global __HOST__ */

import React from 'react'
import axios from 'axios'
import componentErrorHandler from '../utilities/componentErrorHandler'
import GlobalStateComponent from '../reusable/ParentClasses/GlobalStateComponent'
import globalState from '../utilities/globalState'
import ProjectMenu from './ProjectMenu'

export default class ProjectMenuContainer extends GlobalStateComponent {
  componentDidMount() {
    axios.get( `${__HOST__}/user/${this.props.userId}/projects` )
      .then( ({ data: projects }) => {
        const projectsObject = projects.reduce( ( accumulator, { id, text } ) => { //eslint-disable-line
          return Object.assign( accumulator, { [id]: { id, text } } ) //eslint-disable-line
        }, {})
        globalState.set({ projects: projectsObject })
      })
      .catch( componentErrorHandler( 'ProjectMenuContainer' ) )
  }

  render() {
    return <ProjectMenu projects={ this.state.projects } />
  }
}
