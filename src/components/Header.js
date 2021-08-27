import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="Photo of Robin Scavo" />
      </a>
      <h1>
        <strong>Robin Scavo </strong>
      </h1>
      <h1>
        Software Engineer.
      </h1>
        {/* crafted by <a href="http://html5up.net">HTML5 UP</a>. */}
    </div>
    <Footer />
  </header>
)

export default Header
