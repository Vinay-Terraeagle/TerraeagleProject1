import React  from 'react'
// import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/app.css'
import { Link } from 'react-router-dom'
// Components
import EmailVerify from '../Components/EmailVerifyComp/EmailVerify'
import EventsComp from '../Components/EventsComponents/EventsComp.js'
import Footer from '../Components/footer'
import AddonCarousels from '../Components/AddonCarousels'
import MealsComp from '../Components/MealsComp'
import Header from '../Components/Header'
import HealthMatrix from '../Components/HealthMatrix'
// api
// import axios from 'axios';


export default function Dashboard() {


  let navigate = useNavigate(); 
    function useNavigateToMyPlan(e) {
        e.preventDefault();
        let path = '/Myplan'; 
        navigate(path);
    } 

  return (
    <React.Fragment>
        <Header/>
        <section>
          <div className='container'>
            <div className='wrapper'>
              <div className='user-row'>
                <div className='user-svg d-flex justify-content-center align-items-center'>
                  <span className='score' title='Profile Score'>Score</span>
                  <Link to='/' className='badge' title='Profile Score'>10</Link>
                <svg className='usericon' width="35" height="43" fill="none"><path fill="#e06358" d="M33.35 35.392c0-2.08-1.06-3.973-2.72-4.774-2.078-1.002-5.494-2.036-10.752-2.036s-8.673 1.034-10.752 2.036c-1.659.8-2.72 2.694-2.72 4.774v6.163H33.35v-6.163z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33.35 35.233c0-2.132-1.258-4.074-3.224-4.895-2.463-1.029-6.512-2.089-12.743-2.089-6.23 0-10.28 1.06-12.743 2.09-1.966.82-3.224 2.761-3.224 4.894v6.322H33.35v-6.322z"></path><path fill="#FFDE9E" d="M18.88 22.594c-4.134 0-7.484-4.105-7.484-9.17v-2.619c0-5.064 3.35-9.169 7.484-9.169s7.484 4.105 7.484 9.17v2.619c0 5.064-3.35 9.169-7.484 9.169z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M17.383 22.926a9.314 9.314 0 01-9.314-9.314v-2.661a9.314 9.314 0 1118.628 0v2.661a9.314 9.314 0 01-9.314 9.314z"></path></svg>
                </div>
                <div className='text-row-bx'>
                  <div className='text-col'>
                    <h5  className='pt-2'>Hello, <p>{}</p></h5>
                  </div>
                  <div className='awards'>
                  <div className='awa-icn'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='award' width="28" height="28"><path fill="#FFD700" d="M5 8.999a6.99 6.99 0 0 0 2.879 5.646l.001.001a6.972 6.972 0 0 0 1.881.979l.051.019a6.906 6.906 0 0 0 1.163.271 6.79 6.79 0 0 0 1.024.085H12c.35 0 .69-.034 1.027-.084l.182-.028c.336-.059.664-.139.981-.243l.042-.016C17 14.693 19 12.078 19 8.999 19 5.14 15.86 2 12 2S5 5.14 5 8.999zM12 4c2.756 0 5 2.242 5 4.999h-2A3.003 3.003 0 0 0 12 6V4zM7.521 16.795V22L12 20.5l4.479 1.5.001-5.205a8.932 8.932 0 0 1-8.959 0z"></path></svg>
                  </div>
                  <div className='staricn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffd700" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <p>25000</p>
                      <span>Points</span>
                    </div>
                  </div>
                  <Link to='/' className='click-more'>View more</Link>
                </div>
              </div>
              <div>
                <button className='btn-dash-1' onClick={useNavigateToMyPlan}> My Plan</button>
              </div>
            </div>
          </div>
        </section>

        {/* alertbox */}
       <EmailVerify/>

        {/* Dashboard-body */}
        <section className='dashboard-body'>
            <div className='container'>
              <div className='dash-main-col'>
                  <div className='dash-left-col'>
                    <div className='dash-left-row'>
                      <div className='dash-inner-txt goal-txt h1'>
                        <h1>My Plan</h1>
                      </div>
                      <div className='dash-inner-card'>
                          <div className='inner-txt'>
                            <div className='dash-txt'>
                            {/* <h1>My Plan</h1> */}
                            <div className='coch-box'>
                              <div className='coch-bx'>
                              <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fc5b4d" className="heart-fill" viewBox="0 0 16 16">
                              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                              </svg>
                              </div>
                              <div className='coch-name'>
                              <h1>Priti Karagaonkar</h1>
                              </div>  
                              </div>
                              
                              <div className='rate-coch'>
                                <div className='rate-main'>
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                  <input type="radio" id="star4" name="rate" value="4" />
                                  <label for="star4" title="text">4 stars</label>
                                  <input type="radio" id="star3" name="rate" value="3" />
                                  <label for="star3" title="text">3 stars</label>
                                  <input type="radio" id="star2" name="rate" value="2" />
                                  <label for="star2" title="text">2 stars</label>
                                  <input type="radio" id="star1" name="rate" value="1" />
                                  <label for="star1" title="text">1 star</label>
                                </div>
                              </div>
                            </div>
                            </div>
                            <div className='sub-txt'>
                                <div className='sub-txt1'>
                                  <h1>Current Weight  </h1>
                                  <span>20 Kgs</span>
                                </div>
                                <div className='sub-txt2'>
                                  <h1>Goal Weight</h1>
                                  <span>50.5 Kgs</span>
                                </div>
                                <div className='sub-txt3'>
                                  <h1>Plan Type</h1>
                                  <div className='plan-type flex'>
                                    <div className='cal-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#55657d" className="calendar" viewBox="0 0 16 16">
                                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                    </div>
                                    <div className='valid'>
                                      <h3>3 Months Comprehensive Plan</h3>
                                    </div>
                                  </div>
                                  {/*  */}
                                  <div className='exp-type flex'>
                                    <div className='cal-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#55657d" className="clock" viewBox="0 0 16 16">
                                        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                                      <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                                      <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='exp'>
                                      <h3>90 Days <span> (Expires in : 4 Day/s ) </span></h3>
                                    </div>
                                  </div>
                                  {/* <span>70.0 Kgs</span> */}
                                </div>
                                <div className='upradebtn'>
                                    <div><button className='btn-upgrade'>Upgrade Plan</button></div>
                                    <div>
                                  <button className='viewmore-btn'>
                                    <Link to='/'>View detais</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="arrow-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                  </button>
                                </div>
                                </div>
                            </div>
                          </div>
                          <div className='iner-logo'>
                          <div className="circle-wrap">
                            <div className="circle">
                              <div className="mask half">
                                <div className="fill"></div>
                                </div>
                                <div className="mask full">
                                <div className="fill"></div>
                                </div>
                                <div className="inside-circle"> 
                                <p>75%</p>
                                <span>Compliance</span>
                                </div>
                            </div>
                          </div>
                            <div className='daily-up'>
                              <button className='daily-check'>Daily check in</button>
                            </div>
                          </div>
                      </div>

                      <div className='dash-second-card'>
                        <MealsComp/>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                  <div className='dash-right-col'>
                    <div className='query-col'>
                    <div className='goal-txt'>
                    <h1> Instant support</h1>
                  </div>
                      <div className='query-row'>
                        <div className='query-txt'>
                          <div className='query-txtbx'>
                          <h5>Queries or claims?</h5>
                          <p>Talk to us for instant Support</p>
                          </div>
                          <div className='action-btn'>
                          <button className='action-btn'>
                            <Link to='/'>View more</Link>
                            <div className='arrow-bg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fc5b4d" className="arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                            </div>
                          </button>
                        </div>
                        </div>
                        <div className='query-img'>
                          <div className='bg-query'>
                          <svg viewBox="0 0 38 35" width="40" height="40" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                          </div>
                        </div>
                      </div>
                      <div className='ad-cd-mn'>
                        <AddonCarousels/>
                      
                      </div>
                      {/* calender section */}
                      <EventsComp/>

                    </div>
                    <div>
                    </div>
                  </div>
              </div>
            </div>
        </section>

        <HealthMatrix/>
    <Footer/>
    </React.Fragment>
  )
}
