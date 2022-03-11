import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import "../Views/apply.scss"

function Apply() {
  return (
    <div className='apply'>
      <Nav/>
      <div className="first">
        <h1>Apply Now</h1>
        <p>Apply for your business loan in minutes with no hassle</p>
      </div>

      <div className="second">
        <form action="" className="fomic">
          <div className="name">
            <input type="text" name="" id="" placeholder='First name' />
            <input type="text" name="" id="" placeholder='last name' />
          </div>

          <div className="amount">
            <input type="number" name="" id="" placeholder='loan amount' />
            <select name="" id="" placeholder='loan category'>
              <option value="">Housing Loan</option>
              <option value="">Corporate Loan</option>
              <option value="">Student Loan</option>
              <option value="">Start Up Loan</option>
              <option value="">SME Loans</option>
            </select>
          </div>

          <div className="gender">
            <input type="radio" name="male" id="" /> Male
            <input type="radio" name="male" id="" /> Female
          </div>

          <div className="employment">
          <select name="" id="">
          <option value="">----Employment status----</option>
              <option value="">Employed</option>
              <option value="">Unemployed</option>
              <option value="">Student</option>
              <option value="">Self Employed</option>
            </select>
          </div>

          <div className="name">
            <input type="text" name="" id="" placeholder='City' />
            <input type="text" name="" id="" placeholder='Home address' />
          </div>

          <div className="name">
            <input type="text" name="" id="" placeholder='phone number' />
            <input type="text" name="" id="" placeholder='Monthly Income' />
          </div>

          <button>Apply</button>
        </form>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Apply