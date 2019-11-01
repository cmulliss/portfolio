import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30,
  }

  return (
    <div>
      <div>
        <h3 style={style}>
          <Link to="/">Home</Link>
        </h3>
        <h3 style={style}>
          <Link to="/Jokes">Jokes</Link>
        </h3>
      </div>
      {children}
    </div>
  )
}

export default Header

// Link and Router don't cause complete refresh
// turn this into a HOC:
// give access to it's props
// destructure a component field from the props object itself
// The Component is going to be passed down through the props, and then it returns that Component but now with the header links applied on top of it.
