import React from 'react'
import ChristmasTree from './ChristmasTree'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Carols from './Carols'

const App = () => {
  return (
    <div>
      <Router>
        <React.Fragment>
          <Navbar />
          <ChristmasTree />
          <Route exact path="/carols" component={Carols} />
        </React.Fragment>
      </Router>

    </div>
  )
}

export default App
