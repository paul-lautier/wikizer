import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearch(e) {
    this.setState({ data: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.data}`)
  }

  render() {
    return (

          <div>
              <Link to="/" className="navbar-item">Home</Link>
                <form onSubmit={this.handleSubmit}>
                      <input className="input is-small is-full-width" type="search" onChange={this.handleSearch} placeholder="Rechercher votre musique"/>
                </form>
            </div>
    )
  }
}

export default withRouter(Navbar)
