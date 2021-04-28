import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AlbumsIndex from './components/AlbumsIndex'
import AlbumsDisplay from './components/AlbumsDisplay'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/search/:query" component={AlbumsIndex} />
            <Route path="/albums/:id" component={AlbumsDisplay} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
  );
}
export default App;

