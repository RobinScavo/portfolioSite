import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-linkedin">
            <span className="label">Linked In</span>
          </a>
        </li>
        {/* <li>
          <a href="#" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
        <li>
          <a href="#" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          "Live like you'll die tomorrow. Learn like you'll live forever."
        </li>
        <li>
          Mahatma Gandhi
        </li>
        {/* <li>&copy; Gatsby Starter Strata</li> */}
        {/* <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li> */}
      </ul>
    </div>
  </div>
)

export default Footer
