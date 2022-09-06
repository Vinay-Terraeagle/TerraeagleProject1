import React from 'react'
import '../../Styles/app.css'

export default function EmailVerify() {
  return (
    <>
     <section className='alert-box'>
          <div className='container'>
            <div className='alert-col'>
              <div className='alert-row'>
                <div className='alert-txt-bx'>
                  <h1>Verification Pending</h1>
                  <p>Please verify Email and Mobile number </p>
                </div>
                <div className='verify-box'>
                  <div className='verify-email'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="email" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                  </svg> 
                  </div>
                  <div className='verify-mobile'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="mobile" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  </div>
                </div>
                <div className='close-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="close-arrow" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
