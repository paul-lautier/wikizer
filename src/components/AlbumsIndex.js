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
        <div>
            {this.state.albums.map(album =>
              <div key={album.id} >
                <Link to={`/albums/${album.id}`}>
                  <h1>{album.title}</h1>
                  <img src={album.artist.picture_small} alt={album.artist.name} />
                  <h2>{album.artist.name}</h2>
                  <h3>{album.label}</h3>
                  <h3>{album.rating}</h3>
                  <h3>{album.duration}</h3>
                  <h3>{album.fans}</h3>
                  <h3>{album.genre}</h3>
                  <h3>{album.release_date}</h3>
                  <img src={album.cover_medium} alt={album.name} />

                </Link>
              </div>
            )}
          </div>

    )
  }
}

export default AlbumsIndex
