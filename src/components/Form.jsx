import React, { useState } from 'react'

function Form() {
    const [Amount, setAmount] = useState(0)
    const [duration, setDuration] = useState(0)
    const [amountPayable, setAmountPayable] = useState(0)

    console.log(Amount)
    
    const calculate = (e) => {
        e.preventDefault()

        if(Amount <= 0 || duration <= 0 ){
          alert('All fields must be filled')
          return
        }else if(duration > 12){
          alert('Maximum loan period is for 12 months')
        }
        else{
          const interest = 10

          const monthlyInterest = interest/100
  
          const total = Amount * monthlyInterest * duration 
  
          const amounting = parseInt(Amount)

          const mainTotal = amounting + total
          
  
          setAmountPayable(mainTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        }
    }
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
            <input type="number" value={10} 
             />

            <button onClick={calculate}>Calculate</button>
            <br />
            <p>you're to pay:   ₦{amountPayable}</p>
        </form>
    </div>
  )
}

export default Form