import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="section featured">
        <div className="container">
          <div className="columns is-multiline is-vcentered">
            <Link to="/search/népal"><div>Népal</div> </Link>
            <Link to="/search/SCH"><div>SCH</div> </Link>
            <Link to="/search/kekra"><div>Kekra</div> </Link>
            <Link to="/search/Damso"><div>Damso</div> </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
