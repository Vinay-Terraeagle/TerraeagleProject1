import React from 'react'
import '../../Styles/app.css'
import {Link} from 'react-router-dom'

export default function Passwordchanged() {
  return (
    <React.Fragment>
        <section className='pad-alert'>
            <div className='container'>
                <div className='psd-col'>
                    <div className='psd-row'>
                    <div className='mail-icon'>
                        <div className='svgicn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="psd-check" viewBox="0 0 16 16">
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                        </svg>
                        </div>
                    </div>
                    <div className='psd-txt'>
                        <div className='psd-txt'>
                            <h1> Password Changed</h1>
                            <p>Please Log in with the new password</p>
                        </div>
                        <div className='mail-btn'>
                            <Link to="/">
                            <button className='backto-login'>Login</button></Link>
                        </div>
                    </div>  
                    </div> 
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
