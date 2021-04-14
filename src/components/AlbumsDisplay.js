import React from 'react'
import axios from 'axios'

class AlbumsDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      album : []
    }

  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album${this.props.match.params.id}`)
      .then(res => this.setState({ album: res.data }))
  }

  render() {
    if(!this.state.album) return null
    console.log(this.state)
    return (
        <div>
          <h1>{this.state.album.title}</h1>
            <div>
              <img src={this.state.album.cover_medium} alt={this.state.album.title} />
              <div>
                <h2>Artist: {this.state.album.artist.name}</h2>
                <h2>Label: {this.state.album.label}</h2>
                <h2>Number of tracks: {this.state.album.nb_tracks}</h2>
                <h2>Release date: {this.state.album.release_date}</h2>
                <h2>Genre: {this.state.album.genres.data.length > 0 ? this.state.album.genres.data[0].name : 'Inconnue' }</h2>
              </div>
            </div>

            <div>
              <h2>Tracklist</h2>
              <ul>
                {this.state.album.tracks.data.map(track =>
                  <li key={track.id}>
                    <h4>{track.title}</h4>
                    <audio src={track.preview} controls />
                  </li>)}
              </ul>
            </div>



        </div>
    )
  }
}

export default AlbumsDisplay