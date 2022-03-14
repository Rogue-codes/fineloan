import React from 'react'
import "../Views/loan.scss"
import Nav from '../Nav.jsx'
import {Link} from "react-router-dom";
import Accordion from '../Accordion';
import Footer from '../Footer';

function Loan() {
  return (
    <div className='loan'>
      <Nav/>
      <div className="top">
        <div className="left">
          <h1>We provide loan for the Average African</h1>
          <p>Apply for your business loan in minutes with no hassle</p>
        </div>

        <div className="right">

        </div>
        
      </div>


      <div className="cate">
        <h1>LOAN CATEGORIES</h1>  
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

        <Accordion/>
        <Footer/>
    </div>
  )
}

export default Loan