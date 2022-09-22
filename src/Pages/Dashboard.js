import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/app.css'
import { Link } from 'react-router-dom'
// Components
import EmailVerify from '../Components/EmailVerifyComp/EmailVerify'
// import EventsComp from '../Components/EventsComponents/EventsComp.js'
import { CircularProgressbar } from 'react-circular-progressbar';
import WorkoutCompo from '../Components/WorkOutComponent/WorkoutCompo'
import Footer from '../Components/footer'
import AddonCarousels from '../Components/AddonCarousels'
import MealsComp from '../Components/MealsComp'
import Header from '../Components/Header'
import HealthMatrix from '../Components/HealthMatrix'
import Star from '../assets/images/star.png'
// api
import axios from 'axios';
import { BASE_URL, TOKEN } from '../Backend/config';
// icons
import { Calendar3 } from 'react-bootstrap-icons'
import { ArrowRightShort } from 'react-bootstrap-icons'
import { ClockHistory } from 'react-bootstrap-icons'
import NoDataFound from  '../Components/NoDataFound/NoDataFound';
import Addon from './Addon'
import stethoscope from '../assets/images/stethoscope.png'
import careicon from '../assets/images/tricn.png'
import { Rating } from 'react-simple-star-rating'


export default function Dashboard() {

  const [coachname, setcoachname] = useState(); 
  const [UserDetails, setUserDetails] = useState()
  const [image, setimage] = useState();
  const [weight, setcurrentweight] = useState();
  const [goalweight, setgoalweight] = useState();
  const [activeplans, setactiveplans] = useState();
  const [health_score, sethealth_score] = useState();
  // badge
  // const [badgeimage, setbadgeimage] = useState();
  const [plandetails ,setplandetails] = useState();
  const [expires_in, setexpires_in] = useState();


  const [workouts, setWorkouts] = useState();
  const [notificationData, setNotificationData] = useState();
  const [mealDetails, setMealDetails] = useState();
  const [healthMatrixDetails, setHealthMatrixDetails] = useState();
  const [verificationDetails, setVerificationDetails] = useState();
  const [subscriptionDetail, setSubscriptionDetail] = useState()
  const [consultantRating, setConsultantRating] = useState()
  const [dailyHealthUpdateStatus, setDailyHealthUpdateStatus] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/home`, {
        headers: {
            Authorization: TOKEN
        }
    })
    .then((response) => {
    setWorkouts(response.data.data.workout_details)
    setNotificationData(response.data.data.user_details.unread_notification_count)
    //setNotificationToggle(response.data.data.user_details.unread_notification_count)
    setMealDetails(response.data.data.meal_details)
    setHealthMatrixDetails(response.data.data.health_metrics_details)
    setVerificationDetails(response.data.data.verification_details)
    setSubscriptionDetail(response.data.data.subscription_based_visibility)
    sethealth_score(response.data.data.user_details.health_score)
     
    setUserDetails(response.data.data.user_details.user_name)
    setimage(response.data.data.user_details.image)
    setcurrentweight(response.data.data.user_details.current_weight)
    setgoalweight(response.data.data.user_details.goal_weight) 
    setactiveplans(response.data.data.plan_details.active_plans[0].expires_in)
    setplandetails(response.data.data.plan_details.active_plans[0].name)
    setcoachname(response.data.data.plan_details.coach_name)
    setexpires_in(response.data.data.plan_details.active_plans[0].interval)

    setConsultantRating(response.data.data.rating_details.rating)
    setDailyHealthUpdateStatus(response.data.data.daily_checkin_details)
    // badge
    // setbadgeimage(response.data.data.badge_details.badge_details.image);

      //Setting the Subscription details in the localstorage so that we can access this thorught the application and show the data
      localStorage.setItem('subscriptionBasedVisibility', JSON.stringify(response.data.data.subscription_based_visibility));
      localStorage.setItem('userDetails', JSON.stringify(response.data.data.user_details));
    })
  },[]);
  

  let navigate = useNavigate();
  function useNavigateToMyPlan(e) {
    e.preventDefault();
    let path = '/Myplan';
    navigate(path);
  }

  let navigateDHU = useNavigate();
  const showDailyHealthUpdateView = () => {
    const status = dailyHealthUpdateStatus.isUpdated

    // Based on the status [false: value means Daily health update is not created by the user, true: Daily health update has been created so we need to call the different API to fetch the details whhich has been created before. ]
    if(!status) {
      navigateDHU('/DailyHealthUpdate', {
        state:{ 
          updatedStatus:status.toString(),
        } 
      })
    } else {
      const id = dailyHealthUpdateStatus.daily_health_update_id
      axios.get(`${BASE_URL}/edit_daily_health/${id} `, {
        headers: {
            Authorization: TOKEN
        }
      }).then((dailyHealthUpdateResponse) => {
        console.log(dailyHealthUpdateResponse)
        navigateDHU('/DailyHealthUpdate', {
          state:{ 
            updatedStatus:status.toString(),
            responseData:JSON.stringify(dailyHealthUpdateResponse),
          } 
        })
      })
    }

  }
  let navigateToSubscription = useNavigate()
  const handleUpgradeClick = () => {
    navigateToSubscription('/Subscriptionplan')
  }

  
  const handleRating = (rate) => {
    const ratingData = {
      rating: rate,
    }
    axios.post(`${BASE_URL}/rate_consultant`, ratingData, {
      headers: {
          Authorization: TOKEN
      }
    }).then((ratingResponse) => {

    })
  }
  return (
    <React.Fragment>
      <Header  unreadNotification={notificationData}/>
      <section>
        <div className='container'>
          <div className='wrapper'>
            <div className='user-row'>
              <div className='user-svg d-flex justify-content-center align-items-center'>
                {/* <span className='score' title='Profile Score'>{notification}</span> */}
                <Link to='/' className='badge' title='Profile Score'></Link>
                {/* <svg className='usericon' width="35" height="43" fill="none"><path fill="#e06358" d="M33.35 35.392c0-2.08-1.06-3.973-2.72-4.774-2.078-1.002-5.494-2.036-10.752-2.036s-8.673 1.034-10.752 2.036c-1.659.8-2.72 2.694-2.72 4.774v6.163H33.35v-6.163z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33.35 35.233c0-2.132-1.258-4.074-3.224-4.895-2.463-1.029-6.512-2.089-12.743-2.089-6.23 0-10.28 1.06-12.743 2.09-1.966.82-3.224 2.761-3.224 4.894v6.322H33.35v-6.322z"></path><path fill="#FFDE9E" d="M18.88 22.594c-4.134 0-7.484-4.105-7.484-9.17v-2.619c0-5.064 3.35-9.169 7.484-9.169s7.484 4.105 7.484 9.17v2.619c0 5.064-3.35 9.169-7.484 9.169z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M17.383 22.926a9.314 9.314 0 01-9.314-9.314v-2.661a9.314 9.314 0 1118.628 0v2.661a9.314 9.314 0 01-9.314 9.314z"></path></svg> */}
                <img src={image} alt="userimage" className="useavatar"/>
              </div>
              <div className='text-row-bx'>
                <div className='text-col'>
                  <h5 className='pt-2'>Hello , {UserDetails}<p></p></h5>
                </div>
                <div className='awards'>
                  <div className='staricn'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffd700" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg> */}

                    <img src={Star} className="badgeimages" alt="badgeimag"/>
                    <p>0</p>
                    <span>Points</span>
                  </div>
                </div>
                {/* <Link to='/' className='click-more'>View more</Link> */}
              </div>
            </div>
            <div>
              <button className='btn-dash-1' onClick={useNavigateToMyPlan}> My Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* alertbox */}
      <EmailVerify verificationDetailsData={verificationDetails}/>

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
                          {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fc5b4d" className="heart-fill" viewBox="0 0 16 16">
                              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                            </svg>
                          </div> */}
                          <img src={careicon} className="careimg" alt='/'/>
                          <div className='coch-name'>
                            <h1>{coachname}</h1>
                          </div>
                        </div>

                        <div className='rate-coch'>
                          <div className='rate-main'>
                            <Rating 
                            onClick={handleRating} 
                            ratingValue={consultantRating} allowHalfIcon="true" size="25"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='sub-txt'>
                      <div className='sub-txt1'>
                        <h1>Current Weight  </h1>
                        <span>{weight} Kg</span>
                      </div>
                      <div className='sub-txt2'>
                        <h1>Goal Weight</h1>
                        <span>{goalweight} Kg</span>
                      </div>
                      <div className='sub-txt3'>
                        <h1>Plan Type</h1>
                        <div className='plan-type flex'>
                          <div className='cal-svg'>
                            <Calendar3 className="calendar" />
                          </div>
                          <div className='valid'>
                            <h3>{plandetails} </h3>
                          </div>
                        </div>
                        {/*  */}
                        <div className='exp-type flex'>
                          <div className='cal-svg'>
                            <ClockHistory className="clock" />
                          </div>
                          <div className='exp'>
                            <h3> {activeplans} <span> 
                              (Expires in : {expires_in} Day/s ) </span></h3>
                          </div>
                        </div>
                        {/* <span>70.0 Kg</span> */}
                      </div>
                      <div className='upradebtn'>
                        <div><button className='btn-upgrade' onClick={handleUpgradeClick}>Upgrade Plan</button></div>
                        <div>
                          {/* <button className='viewmore-btn'>
                                    <Link to='/'>View detais</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="arrow-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                  </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='iner-logo'>
                    {/* <div className="circle-wrap">
                      <div className="circle">
                        <div className="mask half">
                          <div className="fill"></div>
                        </div>
                        <div className="mask full">
                          <div className="fill"></div>
                        </div>
                        <div className="inside-circle">
                          <p>0</p>
                          <span>HealthScore</span>
                        </div>
                      </div>
                    </div> */}
                     <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar value={health_score} text={`${health_score}`}>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                       <strong>HealthScore</strong> 
                     </div>
                    </CircularProgressbar>
                    <span className='p-1 text-center'>HealthScore</span>
                    </div>
                    <div className='daily-up'>
                      <button className='daily-check' onClick={showDailyHealthUpdateView}>Daily check in</button>
                    </div>
                  </div>
                </div>

                <div className='dash-second-card'>
                  <MealsComp mealData={mealDetails}/>
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
                      <h5>Talk To Experts</h5>
                      <p>Doctor, Trainer, Therapist</p>
                    </div>
                    <div className='action-btn'>
                      <Link to='/Talktous' className='action-btn'>
                        <span >Talk to us for instant Support</span>
                        <div className='arrow-bg'>
                          <ArrowRightShort className="arrow-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className='query-img'>
                    <div className='bg-query'>
                      {/* <svg viewBox="0 0 38 35" width="40" height="40" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg> */}
                      <img src={stethoscope} className="steph"/>
                    </div>
                  </div>
                </div>
                <div className='ad-cd-mn'>
                  <AddonCarousels subscriptionLists={subscriptionDetail}/>
                  {/* <Addon/> */}
                  
                  
                   {/* {subscriptionDetail ? <AddonCarousels AddonCarousels={subscriptionDetail}/> :  */}
                   {/* console.log(subscriptionDetail)} */}
                 
                    { workouts ? <WorkoutCompo WorkoutCompo={workouts}/> : ''}
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HealthMatrix healthMatrixData={healthMatrixDetails}/>
      <Footer />
    </React.Fragment>
  )
}
