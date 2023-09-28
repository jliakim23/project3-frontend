import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className="nav">
        <nav>
            <Link  to="/">Home</Link>
            <Link to="/Trip">My Trip</Link>
        </nav>
    </div>
  )
}

export default Nav