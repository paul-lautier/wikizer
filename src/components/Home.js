import React from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom'


class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      albums : null
    }
  }
  getData() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
      .then(res => {
        this.setState({ albums: res.data.albums })
        console.log(res.data.albums)
      })
  }

  componentDidMount(){
    this.getData()
  }



  render() {
    if(!this.state.album) return null
    console.log(this.state.album)
    return (<div>
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

export default Home

