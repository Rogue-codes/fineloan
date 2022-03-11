import React, { useState } from 'react'
import { Data } from '../data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


const Accordion = () => {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <div className='accordion-section'>
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
            </div>
            {Data.map((item,index)=>(<div className="accordion-container">
                <div className="head" onClick={()=>toggle(index)} key={index}><h1>{item.question}</h1><span>{clicked === index ? <FontAwesomeIcon className='ico' icon={faMinus}></FontAwesomeIcon> : <FontAwesomeIcon className='ico' icon={faPlus}></FontAwesomeIcon>}</span></div>
                {clicked === index ? <div className="foot"><p>{item.answer}</p></div>:null}
            </div>))}

            <div className="ready">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="search">
                    <input type="text" placeholder='Email address'/>
                    <button>Get Started</button>
            </div>
            
        </div>
    )
}

export default Accordion