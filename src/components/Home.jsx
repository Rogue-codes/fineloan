import React, { useState } from 'react'
import {animated, useSpring} from 'react-spring'
import Hero from './Hero'
import Nav from './Nav'
import {Link} from "react-router-dom";
import Footer from './Footer';

function Home() {
  const [flip, set] = useState(false)
  const { users, Loans } = useSpring({
    reset: true,
    reverse: flip,
    from: { users: 0, Loans: 0 },
    users: 250000,
    Loans: 50000,
    delay: 5000,
    // config: config.molasses,
    onRest: () => set(flip),
  })
  return (
    <div>
        <Nav/>
        <Hero/>
        <div className="section1">
          <div className="left"></div>

          <div className="right">
            <h1>Thousands of customers trust our company</h1>
            <p>The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information. How do you grab your customers’ attention.</p> <br />
            <p>The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information. How do you grab your customers’ attention.</p>
            <Link to='/loan'>
            <button>Get started</button>
            </Link>
          </div>
        </div>
        <div className="section2">
        <div className="gridContainer">
          <div className="gridItem">
          <h3>Housing Loan</h3>
          <p>Unlocking business opportunities and delivering superior returns.Learn more</p>
          <Link to='/loan'><button>View</button></Link>
          </div>

          <div className="gridItem">
            <h3>Corporate Loan</h3>
            <p>Get up to ₦6m  for your corporate organization and business</p>
            <Link to='/loan'><button>View</button></Link>
          </div>
          
          <div className="gridItem">
            <h3>Student Loan</h3>
            <p> We believe in you and that's why we willing to help you get that degree youve been hoping for</p>
            <Link to='/loan'><button>View</button></Link>
          </div>
          <div className="gridItem">
            <h3>Start Up Loan</h3>
            <p>We believe in the transformative power of technology</p>
            <Link to='/loan'><button>View</button></Link>
          </div>
          <div className="gridItem">
            <h3>SME Loans</h3>
            <p>We believe in supporting businesses with financing that enables them to scale and grow quickly</p>
            <Link to='/loan'><button>View</button></Link>
          </div>
        </div>
          
        </div>
        <div className="section3">
          <div className="left">
            <h1>We provide over</h1>
            <h2><animated.span className='animate'>{Loans.to(n => Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</animated.span></h2>
            <h1>Loans Per day</h1>
          </div>

          <div className="right">
            <h1>With over</h1>
            <h2><animated.span className='animate'>{users.to(n => Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</animated.span></h2>
            <h1>Users Across AFrica</h1>
          </div>
        </div>
        <div className="getStarted">
        <h1>How it works</h1>
        </div>
        <div className="section4">
          <div className="cards">
            <div className="circle">1</div> 
            <h1>Apply for loan</h1>
            <p>Choose your loan tenure & amount then share some information about yourself</p>
          </div>

          <div className="cards">
            <div className="circle">2</div>
            <h1>Verify</h1>
            <p>Verify the information that you've provided</p>

          </div>

          <div className="cards">
            <div className="circle">3</div>
            <h1>Receive your funds</h1>
            <p>Sign your documents and get the money in your bank account within 24 hours, if your loan is approved</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home