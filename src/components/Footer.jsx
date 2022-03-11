import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="left">
        <div className="logo">
            <img src="/logo.png" alt="" />    
        </div>
        <p>78/A, Green lane, Kings road, NYC-1989</p>
        <p>finlone@gmail.com</p>
        <p>+10 (87) 728 2870</p>
        <span></span>
        <span></span>
        <span></span>
        </div>

        <div className="center">
            <h1>Useful links</h1>
            <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Loans</li>
                <li>Savings</li>
            </ul>
        </div>

        <div className="right">
        <h1>Subscribe Newsletter</h1>
        <p>Subscribe newsletter to get updates about new jobs.</p>
        <input type="search" name="" placeholder='Enter your email' id="" />
        <button>Submit</button>
        </div>
    </footer>
  )
}

export default Footer