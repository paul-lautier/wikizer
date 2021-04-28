import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from "react-bootstrap/Card";

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
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title> {album.title}</Card.Title>
      <Card.Img variant="top" src={album.cover_medium} alt={album.name}/>
      <Card.Subtitle className="mb-2 text-muted">Par : {album.artist.name}</Card.Subtitle>
      <Card.Img variant="top" src={album.artist.picture_medium} alt={album.artist.name} />
      <Link to={`/albums/${album.id}`}><button type="button">plus d'info</button></Link>
    </Card.Body>
  </Card>
  )}  
  </div>

    )
  }
}

export default AlbumsIndex
