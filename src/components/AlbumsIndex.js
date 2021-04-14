import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AlbumsIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      albums: null
    }
  }

  getData() {
    axios.get('https://api.deezer.com/search/album', {
      params: {
        q: this.props.match.params.query
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({ albums: res.data.data })
      })
  }

  componentDidMount(){
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.getData()
    }
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.albums.map(album =>
              <div key={album.id} >
                <Link to={`/albums/${album.id}`}>
                  <h1>{album.title}</h1>
                  <h2>{album.artist.name}</h2>
                  <figure className="image">
                    <img src={album.cover_medium} alt={album.name} />
                  </figure>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default AlbumsIndex
