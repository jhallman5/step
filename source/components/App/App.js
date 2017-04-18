import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Landing from './Landing'

const App = () => (
  <Router history={ browserHistory } >
    <Route path='/' component={ Landing } />
  </Router>
)

export default App
