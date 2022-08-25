import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/app.css'


export default function EmailReq() {
  return (
    <React.Fragment>
        <section className='forgot-p'>
            <div className='container'>
                <div className='reset-pass'>
                    <div className='reset-pass-col'>
                    <div className='back-btn-col'>
                      <Link to="/">
                        <button className='back-btn'> 
                            <div className='backbtn-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                </svg>
                            </div>
                            <p>Back</p>
                        </button>
                        </Link>
                    </div>
                    <div className='rest-txt'>
                        <h1>Reset Password</h1>
                      <p>Enter the email associated with your account and we'll send an email with instruction to reset your password</p>
                    </div>
                    <div className='form-col'>
                      <form className='forgot-pass'>
                        <div className='p-f-field'>
                          <label for="email">Email</label>
                          <input type="email" className="forgot-input" placeholder='Enter New Email' required/> 
                          {/* <span className='password-alert'>*Password must be 8-20 characters, no spaces and must contain at least 3 of these characters: 1Uppercase, Lowercase, Number, Or Symbol</span> */}
                        </div>
                        {/* <div className='confirm-pass'>
                          <label> Confirm New Password</label>
                          <input type="/" className="confirm-input" placeholder='Enter New password'/>
                          <span className='alert'> *New password and confirm password new password do not match</span>
                        </div> */}
                        <Link to="">
                        <button className='pass-submit'> Submit</button>
                        </Link>
                      </form>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
