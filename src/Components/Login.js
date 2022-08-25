import React from 'react'
// import {Link} from 'react-router-dom'
import '../Styles/app.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const url = "http://revdev.revibe.in/api/login";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const resp = await axios.post(url, {email:email, password:password });
        console.log("response",resp.data.error);
        if(resp.status === 200) {
          window.location = "/Dashboard";
        } else if(resp.data.error === "Invalid Credentials") {
          e.parents('.login_main').find('.err-notification').show();
        }
      } catch(error) {

        console.log("response ::::",error);      }
    };
  

  return (
    <>
    <section className='login-sec'>
      <div className='container'>
        <div className='login-hero'>
        <div className='login_logo'>
              <img src='./assets/images/logo-sm.png' alt='Logo'/>
            </div>
            <div className='login_main'>
            {/* <div className='login_logo'>
              <img src='./assets/images/logo-sm.png' alt='Logo'/>
            </div> */}
              <div className='txt-col'>
                <h2 className='err-notification'>Your email or passsword is wrong.</h2>
                <h1>Welcome Back!</h1>
                <p>Enter Your credentials to access your account</p>
              </div>
              <div className='form-col'>
                  <form className='login-form' onSubmit = {handleSubmit} action='/'>
                    <div className='email-field'>
                      <label>Enter Your Email</label>
                      <input type="email" className='email' placeholder='Enter Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                      <span className='alert'>this field is required</span>
                    </div>
                    <div className='Password-field'>
                      <label>Enter Password</label>
                      <input type="passsword" className='password' placeholder='Enter Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                      <span className='alert'>this field is required </span>
                    </div>
                    <div className='login-btn'>
                    <button className='btn-login'>Sign In</button>
                    </div>
                  </form>
              </div>
              <div className='f-pass-col'>
                  <div className='rembr'>
                      <input type='checkbox'/>
                      <p>Remember me</p>
                  </div>
                  <div className='f-pass'>
                    <Link to="/ForgotPassword" className='forgot'>Forgot Password</Link>
                  </div>
              </div>
              <div className='line'>
                <p className='chakra-text'>Or</p>
              </div>
              <div className='social-login'>
                <button className='g-btn'>
                  <div className='g-signin'>
                  <svg viewBox="0 0 18 18" focusable="false" className="google"><svg width="18" height="18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.88 10.78A5.54 5.54 0 013.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 000 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path fillRule="evenodd" clipRule="evenodd" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path></svg></svg>
                  <p>Sign in with Google</p>
                  </div>
                </button>
              </div>
              <div className='dnt-acct'>
                  <p>Don't have an account? <Link to="/"><b>SignUp</b></Link></p>
              </div>
            </div>
        </div>
      </div>
    </section>
   </>
  )
}
