import React, { useState } from 'react'
import {Link} from "react-router-dom";

function Nav() {
    const [bg, setBg] = useState(false)

    const changeBg = () => {
        if(window.scrollY >= 550){
            setBg(true)
        }else{
            setBg(false)
        }
    }

    window.addEventListener('scroll', changeBg)
  return (
    <nav className={bg ? 'nav active' : 'nav'}>
        <div className="logo">
            <img src="/logo.png" alt="" />    
        </div>

        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/loan'>Loan</Link>
            <Link to='/about'>About</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/apply'>Apply for loan</Link>
        </div>
    </nav>
  )
}

export default Nav