import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import ProjectContainer from '../Project/ProjectContainer'
import CouldDoContainer from '../CouldDo/CouldDoContainer'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact={ true } path='/' component={ Landing } /> //eslint-disable-line
      <Route path='/project' component={ ProjectContainer } />
      <Route path='/could-do' component={ CouldDoContainer } />
    </div>
  </BrowserRouter>
)

export default App
