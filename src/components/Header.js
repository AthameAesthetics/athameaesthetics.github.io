import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'
import pic03 from '../images/pic03.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <span className="image ae-logo">
      <img src={logo} alt="" />
    </span>
    <div className="logo">
      <span className="icon fa-moon-o"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Welcome to Athame Aesthetics</h1>
        <p>
          My passion for skin care is only rivaled by my desire to make a
          positive difference in this world, one person at a time. <br />
          It all begins with loving the skin you are in.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('menu')
            }}
          >
            Menu
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Axiom
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
