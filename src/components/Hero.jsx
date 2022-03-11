import React from 'react'
import Form from './Form'

function Hero() {
  return (
    <main className='hero'>
        <div className="left">
          <h1>
            Get Loan for your <br /> business growth or <br /> Startup
          </h1>

          <p>
            Apply for business loan in minutes without any hassle
          </p>

          <button>
            HOW IT WORKS
          </button>
        </div>

        <div className="right">
        <Form/>
        </div>
    </main>
  )
}

export default Hero