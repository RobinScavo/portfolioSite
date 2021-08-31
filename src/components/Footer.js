import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            onClick={() => window.open('https://github.com/RobinScavo')}
            className="icon fa-github"
          ><span className="label">Github</span></a>
        </li>
        <li>
          <a
            onClick={() => window.open('https://www.linkedin.com/in/robin-scavo-0617881b5/')}
            className="icon fa-linkedin"
          ><span className="label">Linked In</span></a>
        </li>
        <li>
          <a href={`mailto:sirscavo@gmail.com`} className="icon fa-envelope-o">
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
      </ul>
    </div>
  </div>
)

export default Footer
