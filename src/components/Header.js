import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/avatar.jpg';

const Header = () => {

  return (
    <header id="header">
      <div className="inner">
          <img src={avatar} className="image avatar" alt="Robin Scavo" />
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
)}

export default Header
