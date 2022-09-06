import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/app.css'

export default function MyGoal() {
  return (
    <>
      <section className='your-goal'>
        <div className='container'>
          <div className='goal-txt'>
            <h1>Your Goals</h1>
          </div>
            <div className='goal-m-col'>
              <div className='goal-m-row'>
                <div className='goal-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="droplet" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                  </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>Water</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>4</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>Liters</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Water intake</h1>
                  </div>
                </div>
              </div>
              <div className='goal-sleep'>
                <div className='goal-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='Sleep' viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
            </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>Sleep</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>7</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>Liters</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Sleep</h1>
                  </div>
                </div>
              </div>
              <div className='goal-steps'>
                <div className='goal-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="droplet" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                  </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>Steps</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>10,000</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>Steps</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Steps activity</h1>
                  </div>
                </div>
              </div>
              <div className='goal-workout'>
                <div className='goal-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="droplet" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                  </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>WorkOuts</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>325</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>WorkOuts</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Workout</h1>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section></>
  )
}
