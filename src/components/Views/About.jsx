import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import "../Views/about.scss"

function About() {
  return (
    <div className='about'>
      <Nav/>
      <div className="aboutTop">
        <div className="left">
        <h1>About Us</h1>
        <p>Making Financial Inclusion Count</p>  
        </div>

        <div className="right">
        </div>
        
      </div>

      <div className="mid">
        <p>We're passionate about leveraging technology to make financial inclusion count</p>
      </div>

      <div className="bottom">
        <div className="left">
          <h1>Who We Are</h1>
          <p>We are a group of technology and finance enthusiasts who are really passionate about making financial inclusion count</p>
        </div>  
        <div className="right">
          <div className="top2">
            <h1>OUR VISION</h1>
            <p>We are Nigeria’s most convenient lending company – delivering outstanding service experiences.</p>
          </div>
          <div className="bottom2">
            <h1>OUR MISSION</h1>
            <p>Everyday, we strive to understand our customers and leverage technology, data and innovation to deliver outstanding service experiences.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About