import React from 'react'
import '../App.css';

const Menu = () => {
  return (
    <div className="topnav" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto topnav">
        <li className="nav-item active">
          <a className="nav-link active" href="#">Popular Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Low Price</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">High Price</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
