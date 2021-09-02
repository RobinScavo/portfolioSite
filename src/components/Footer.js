import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href='https://github.com/RobinScavo' target='_blank'
            className="icon fa-github"
            rel="noreferrer"
          ><span className="label">Github</span></a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/robin-scavo-0617881b5/' target='_blank'
            className="icon fa-linkedin"
            rel="noreferrer"
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
