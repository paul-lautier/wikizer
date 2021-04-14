import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="section featured">
        <div className="container">
          <div className="columns is-multiline is-vcentered">
            <Link to="/search/népal" className="column is-half-desktop is-full-mobile is-half-tablet is-vcentered" id="art-one"><div>Népal</div> </Link>
            <Link to="/search/SCH" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-two"><div>SCH</div> </Link>
            <Link to="/search/kekra" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-three"><div>Kekra</div> </Link>
            <Link to="/search/Damso" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-four"><div>Damso</div> </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
