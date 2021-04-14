import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AlbumsIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      albums : []
    }
  }

  getData() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album', {
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
                  <h1>Titre de l'album : {album.title}</h1>
                  <img src={album.cover_medium} alt={album.name} />
                  <h2>Nom de l'artiste : {album.artist.name}</h2>
                  <img src={album.artist.picture_small} alt={album.artist.name} />
                  <br></br>
                  --------------------------------------------------------------------------
                  
                </Link>
              </div>
              
            )}
            
          </div>

    )
  }
}

export default AlbumsIndex
