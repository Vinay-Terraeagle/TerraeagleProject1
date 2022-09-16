import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/TalkToUs/TalkToUs.css'
import {ArrowRightShort} from 'react-bootstrap-icons'


export default function Addon() {
    return (
        <>
            {/* <div className='book-doctor'>
                <div className='addon-txt'>
                    <div className='addponplan'>
                        <span>Started at ₹ 5000</span>
                    </div>
                    <div className='addon-txtbx'>
                        <h1>Talk To Export</h1>
                        <small>Doctor, Trainer, Therapist</small>
                        <p>Talk to us for instant Support</p>
                    </div>
                    <div className='bio-buttons'>
                        {/* <div  className="btn-purch">
                              <button className='gbtn-gt'>Learn More</button>
                            </div> 
                        <div className='btn-purch'>
                            <button className='gbtn-gt'>Consort Now 
                            <ArrowRightShort className='ml-1'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='query-row'>
                  <div className='query-txt'>
                    <div className='query-txtbx'>
                      <h5>Talk To Export</h5>
                      <p>Doctor, Trainer, Therapist</p>
                    </div>
                    <div className='action-btn'>
                      <Link to='/Message' className='action-btn'>
                        <span >Talk to us for instant Support</span>
                        <div className='arrow-bg'>
                          <ArrowRightShort className="arrow-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className='query-img'>
                    <div className='bg-query'>
                      <svg viewBox="0 0 38 35" width="40" height="40" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                    </div>
                  </div>
                </div>
        </>
    )
}





