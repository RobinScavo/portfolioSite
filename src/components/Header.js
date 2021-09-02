import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <div href='https://robinscavo.github.io/portfolioSite/' className="image avatar">
        <img src={avatar} alt="Robin Scavo" />
      </div>
      <h1>
        <strong>Robin Scavo </strong>
      </h1>
      <h1>
        Software Engineer
      </h1>
      <h1>
        Web Developer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
