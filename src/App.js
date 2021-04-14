import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AlbumsIndex from './components/AlbumsIndex'



function App() {
  return (
    <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/search/:query" component={AlbumsIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
  );
}
export default App;

