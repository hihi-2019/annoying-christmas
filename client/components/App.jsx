import React from 'react'
import ChristmasTree from './ChristmasTree'
import Star from './Star'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Carols from './Carols'

const App = () => {
  return (
    <div>
      <Router>
        <React.Fragment>
          <Navbar />
          <Route path='/' component={ChristmasTree} />
          <Route path='/stars' component={Star} />
          <Route exact path="/carols" component={Carols} />
        </React.Fragment>
      </Router>

    </div>
  )
}

export default App
