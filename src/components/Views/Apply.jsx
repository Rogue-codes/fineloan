// import { useForm } from 'react-hook-form'
import Nav from '../Nav'
import Footer from '../Footer'
import "../Views/apply.scss"
import { useEffect, useState } from 'react'

function Apply() {
  const initialValues = {
    firstName:'',
    lastName:'',
    loanAmount:'',
    loantype:'',
    emailAddress:'',
    employment:'',
    city:'',
    home:'',
    phone:'',
    income:''
  }
  const [val, setVal] = useState(initialValues)
  console.log(val)

  const [isSubmit, setIsSubmit] = useState(false)

  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setVal({...val, [name]:value })
    console.log(val)

  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    setFormError(validate(formError))
    setIsSubmit(true)
  }

  useEffect(()=>{
    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
      console.log(val)
    }
  },[formError,isSubmit,val])

  const validate = (values) => {
    const errrors = {}
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if(!values.firstName){
      errrors.firstName = 'please enter your first name'
    }
    if(!values.lastName){
      errrors.lastName = 'please enter your last name'
    }

    if(!values.loanAmount){
      errrors.loanAmount = 'please enter a loam amount'
    }

    if(!values.loantype){
      errrors.loantype = 'please select a loan category'
    }

    if(!values.employment){
      errrors.employment = 'please enter your employment status'
    }

    if(!values.phone){
      errrors.phone = 'please enter your phone number'
    }

    if(!values.income){
      errrors.income = 'please enter your monthly income'
    }

    return errrors
  }
  return (
    <div className='apply'>
      <Nav/>
      <div className="first">
        <h1>Apply Now</h1>
        <p>Apply for your business loan in minutes with no hassle</p>
      </div>

      <div className="second">
        <form action="" className="fomic" onSubmit={handleSubmit} >
          <div className="name">
            <input type="text" name='firstName'  id="" placeholder='First name' value={val.firstName} onChange={handleChange} /> 
            <p>{formError.firstName}</p>
            <input type="text" name='lastName' id="" placeholder='last name' value={val.lastName} onChange={handleChange} />
            <p className='p2'>{formError.lastName}</p>
          </div>

          <div className="amount">
            <input type="number" name="loanAmount" id="" placeholder='loan amount' value={val.loanAmount} onChange={handleChange} />
            <p className='p3'>{formError.loanAmount}</p>
            <select name="loantype" id="" placeholder='loan category' value={val.loantype} onChange={handleChange}>
            <option value="">loan category</option>
              <option value="Housing Loan">Housing Loan</option>
              <option value="Corporate Loan">Corporate Loan</option>
              <option value="Student Loan">Student Loan</option>
              <option value="Start Up Loan">Start Up Loan</option>
              <option value="SME Loans">SME Loans</option>
            </select>
            <p className='p4'>{formError.loantype}</p>
          </div>

          <div className="email">
            <input type="email" name="emailAddress" id="" placeholder='email address' value={val.emailAddress} onChange={handleChange} /> 
          </div>

          <div className="employment">
          <select name="employment" id="" value={val.employment} onChange={handleChange}>
          <option value="">----Employment status----</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Student">Student</option>
              <option value="Self Employed">Self Employed</option>
            </select>
          </div>

          <div className="name">
            <input type="text" name="city" id="" placeholder='City' value={val.city} onChange={handleChange} />
            <input type="text" name="home" id="" placeholder='Home address' value={val.home} onChange={handleChange} />
          </div>

          <div className="name">
            <input type="text" name="phone" id="" placeholder='phone number' value={val.phone} onChange={handleChange} />
            <input type="text" name="income" id="" placeholder='Monthly Income' value={val.income} onChange={handleChange}/>
          </div>

          <button onClick={handleSubmit}>Apply</button>
        </form>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Apply