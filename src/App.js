import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AlbumsIndex from './components/AlbumsIndex'
import AlbumsDisplay from './components/AlbumsDisplay'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>



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

