import React from 'react'
import axios from 'axios'

class AlbumsShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      album: null
    }

  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/album/${this.props.match.params.id}`)
      .then(res => this.setState({ album: res.data }))
  }

  render() {
    if(!this.state.album) return null
    console.log(this.state)
    return (



        <div >
          <h1>{`${this.state.album.artist.name} '${this.state.album.title}'`}</h1>
          <hr />
          <div>
            <div>
            
                <img src={this.state.album.cover_medium} alt={this.state.album.title} />
              

            </div>
            <div>
              <h2>Artiste: {this.state.album.artist.name}</h2>
              <h2>Label: {this.state.album.label}</h2>
              <h2>Nombre de pistes: {this.state.album.nb_tracks}</h2>
              <h2>Durée: {this.state.album.duration}</h2>
              <h2>Date de sorie: {this.state.album.release_date}</h2>
              <h2>Genre: {this.state.album.genres.data.length > 0 ? this.state.album.genres.data[0].name : 'Genre non spécifié' }</h2>
              
            </div>
          </div>

          <div>
            <div>
              <h2>Tracklisting</h2>
              <ul>
                {this.state.album.tracks.data.map(track =>
                  <li key={track.id}>
                    <h4>{track.title}</h4>
                    <audio src={track.preview} controls />
                  </li>)}
              </ul>
            </div>

            <div>

            </div>
          </div>
        </div>
    )
  }
}

export default AlbumsShow