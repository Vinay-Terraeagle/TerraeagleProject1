    import React from 'react'
import '../Styles/app.css'

export default function checkEmail() {
  return (
    <>
    <React.Fragment>
        <section className='checkmail'>
            <div className='container'>
                <div className='email-col'>
                    <div className='email-row'>
                    <div className='mail-icon'>
                        <div className='svgicn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="mail-svg" viewBox="0 0 16 16">
                    <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
                    </svg>
                        </div>
                    
                    </div>
                    <div className='mail-col'>
                        <div className='mail-txt'>
                            <h1>Email has been sent!</h1>
                            <p>Please Check your inboxand click in the received link to reset a password</p>
                        </div>
                        {/* <div className='mail-btn'>
                            <button className='backto-login'>Login</button>
                        </div> */}
                        <div className='dntrec-mail'>
                            <h5>Don't receive the link? <a href='/'>Resend</a></h5>
                        </div>
                    </div>  
                    </div> 
                </div>
            </div>
        </section>
    </React.Fragment>
  </>
  )
}
