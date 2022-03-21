import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function Form() {
    const [Amount, setAmount] = useState(0)
    const [duration, setDuration] = useState(0)
    const [amountPayable, setAmountPayable] = useState(0)
    const [warn, setWarn] = useState(false)  
    const [showamount, setShowAmount] = useState(false) 
    const calculate = (e) => {
        e.preventDefault()

        if(Amount <= 0 || duration <= 0 ){
          setWarn(true)
          return
        }else if(duration > 12){
          setWarn(true)
        }
        else{
          const interest = 5

          const monthlyInterest = interest/100
  
          const total = Amount * monthlyInterest * duration 
  
          const amounting = parseInt(Amount)

          const mainTotal = amounting + total
          
  
          setAmountPayable(mainTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

          setShowAmount(true)
        }
    }

    const masked = useTransition(warn, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: warn,
      delay: 200,
      // config: config.molasses,
      // onRest: () => set(!show),
    })

    const maskTransitions = useTransition(warn, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: warn,
      delay: 200,
      // config: config.molasses,
      // onRest: () => set(!show),
    })

    const maskedAmount = useTransition(showamount, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: showamount,
      delay: 200,
      // config: config.molasses,
      // onRest: () => set(!show),
    })

    const showMaskedAmount = useTransition(showamount, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: showamount,
      delay: 200,
      // config: config.molasses,
      // onRest: () => set(!show),
    })

    console.log(Amount)

  return (
    <div>
        <form action="" className='form'>
            <h2>How much do you want</h2>
            <p>We provide online instant cash loans with fast disbursement</p>
            <label htmlFor="">How much do you want to borrow</label>
            <input type="number" placeholder='Amount'
            onChange={(e)=> setAmount(e.target.value)}
            />

            <label htmlFor="">Loan Duration</label>
            <input type="number" placeholder='Month'
            onChange={(e)=> setDuration(e.target.value)}
            />

            <label htmlFor="">Interest rate</label>
            <input type="number" value={5} 
             />

            <button onClick={calculate}>Calculate</button>
            <br />
        </form>
        {
            masked(
            (styles, item) => item && <animated.div style={styles} className='firstAnimate' onClick={()=> setWarn(false)}>
              
            </animated.div>
            )
        }

        {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='Animated' onClick={()=> setWarn(false)}>
              <span><FontAwesomeIcon className='cancel' icon={faTimes} onClick ={ () => setWarn(false) } style={{color:'red'}} size="xl"></FontAwesomeIcon></span>
                <h2>error!!</h2>
                <p>Form isn't filled correctly</p>
                  <p>Ensure that all  fields are correctly filled </p>
                  <p>Enter a vapd Loan amount that is between ₦0 and ₦6m</p>
                  <p>Maximun loan duration is 12 months</p>
            </animated.div>
            )
        }   

        {
            maskedAmount(
            (styles, item) => item && <animated.div style={styles} className='firstAnimate' onClick={()=> setShowAmount(false)}>
              
            </animated.div>
            )
        }

        {
            showMaskedAmount(
            (styles, item) => item && <animated.div style={styles} className='Animated2' onClick={()=> setShowAmount(false)}>
              <span><FontAwesomeIcon className='cancel' icon={faTimes} onClick ={ () => setWarn(false) } style={{color:'#0272ff'}} size="xl"></FontAwesomeIcon></span>
              <h2>Dear user</h2>
              <p>you're trying to access a loan of <b>₦{Amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b></p>
              <p>For a period of <b>{duration}months</b></p>
              <p className='pay'>You're expected to pay back:  <b>₦{amountPayable}</b></p>
              <p>to carry on with your request please click on this <Link to='/apply'>Link</Link>.</p>
            </animated.div>
            )
        }
    </div>
  )
}

export default Form