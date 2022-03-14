import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [showMenu, setShowMenu]= useState(false)
    const [bg, setBg] = useState(false)

    const changeBg = () => {
        if(window.scrollY >= 550){
            setBg(true)
        }else{
            setBg(false)
        }
    }

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
      })

      const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateX(-100%)"},
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
        reverse: showMenu,
        delay: 200,
         // config: config.molasses,
        // onRest: () => set(!show),
      })



    window.addEventListener('scroll', changeBg)
  return (
    <nav className={bg ? 'nav active' : 'nav'}>
        <Link to='/'>
            <div className="logo">
                <img src="/logo.png" alt="" />    
            </div>
        </Link>

        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/loan'>Loan</Link>
            <Link to='/about'>About</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/apply'>Apply for loan</Link>
        </div>

        <span className='icon'>
            <FontAwesomeIcon icon={faBars} onClick ={ () => setShowMenu(!showMenu) } style={{color:'white'}} size="xl"></FontAwesomeIcon>
        </span>

        {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='firstAnimate' onClick={()=> setShowMenu(false)}>

            </animated.div>
            )
        }

        {
            menuTransitions(
            (styles, item) => item && <animated.div style={styles} className='animate'>
                <Link to='/' onClick={()=> setShowMenu(false)}>Home</Link>
                <Link to='/loan' onClick={()=> setShowMenu(false)}>Loan</Link>
                <Link to='/about' onClick={()=> setShowMenu(false)}>About</Link>
                <Link to='/faq' onClick={()=> setShowMenu(false)}>FAQ</Link>
                <Link to='/apply' onClick={()=> setShowMenu(false)}>Apply for loan</Link>
            </animated.div>
            )
        }
    </nav>

    
  )
}

export default Nav