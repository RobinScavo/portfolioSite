import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            Committed to building tools designed to enrich the lives of others.
            </h2>
          </header>
          {/* <p> */}
            <div className='skillRatings'>
              <ul className='skills'>
                <li><i class="icon fa-chevron-right"></i> React.js </li><br />
                <li><i class="icon fa-chevron-right"></i> Javascript </li><br />
                <li><i class="icon fa-chevron-right"></i> HTML5 </li><br />
                <li><i class="icon fa-chevron-right"></i> (S)CSS </li><br />
                <li><i class="icon fa-chevron-right"></i> Firebase </li><br />
                <li><i class="icon fa-chevron-right"></i> Git Hub </li><br />
              </ul>
              <ul className='ratings'>
                <li>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                </li>
                <li>
                <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                </li>
                <li>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                </li>
                <li>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                </li>
                <li>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                </li>
                <li>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="icon fa-tree"></i>
                  <i class="empty icon fa-tree"></i>
                </li>

              </ul>
            </div>
          {/* </p> */}
          <ul className="actions">
            <li>
              <a href="https://docs.google.com/document/d/1t85UlbQteZQY4BHjgfoOR-ycsoqqdy3DtlFalbb8J98/edit" className="button">
                Resume
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2 className='mediumText'>Recent Work</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                My Git Hub
              </a>
            </li>
          </ul> */}
        </section>

        <section id='four'>
          <h2 className='mediumText'>Testimonials</h2>
          <ul className='testimonials'>
            <li>
              <div className='upperDiv'>
                <i class="testimonialChevron icon fa-chevron-right"></i>
                <span className='italics'>"Out of the many people I worked with at App Academy,
                Robin was one of the most team-oriented. He always brought enthusiasm
                to our project and kept us on track."</span>
              </div>
              <div className='speaker'>
                <i class='up icon fa-tree'></i>
                Maximos Salzman, software engineer at Epic Video Technologies
              </div>
            </li>
            <li>
              <div className='upperDiv'>
                <i class="testimonialChevron icon fa-chevron-right"></i>
                <span className='italics'>Robin comes with my highest recommendations.
                He was a joy to work with and brings an energy and passion to the team
                that few do.</span>
              </div>
              <div className='speaker'>
                <i class='up icon fa-tree'></i>
                Kyle Barthelmes, software engineer at Redfin
              </div>
            </li>
            <li>
              <div className='upperDiv'>
                <i class="testimonialChevron icon fa-chevron-right"></i>
                <span className='italics'>"Robin is a fantastic gentlemen! Everything about him is great.
                He is nice, friendly and kind to everyone in the hotel. He always keep
                the room clean and with clear information. Life is always good when
                meet up with him and ask him if he has any concern and return back with
                everything is fantastic. I would strongly recommend Robin to any host
                around the world."</span>
              </div>
              <div id='bottomTestimonial' className='speaker'>
                <i class='up icon fa-tree'></i>
                Tre Sok, hotel manager in Krong Siem Reap, Cambodia
              </div>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2 className='mediumText'>Get In Touch</h2>
          <p style={{ textAlign: 'center' }}>
            Feel free to contact me with questions, comments or job offers. I'm
            also happy to help any aspiring software developers with advice.
          </p>
          <div id='contactInfo' className="row">
            {/* <div className="8u 12u$(small)"> */}
              {/* <form method="post" action="mailto:sirscavo@gmail.com" enctype="text/plain">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30,marginRight: 40, justifyContent: 'flex-end' }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form> */}
            {/* </div> */}
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Missoula, MT
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  406-203-2686
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href={`mailto:sirscavo@gmail.com`}>sirscavo@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
