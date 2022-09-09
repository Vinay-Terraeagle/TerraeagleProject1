import React from 'react'
import { useNavigate } from "react-router-dom";
import '../../Styles/app.css'
// images
import Yoga1 from "../../assets/images/y6.jpg"
import Yoga2 from "../../assets/images/y7.jpg"
import Yoga3 from "../../assets/images/y8.jpg"
import Yoga4 from "../../assets/images/y9.jpg"
import Yoga5 from "../../assets/images/y10.jpg"
import Yoga6 from "../../assets/images/y11.png"
export default function WorkoutCompo() {

  const navigateToMyPlanExercise = useNavigate();
  const showWorkoutView = () => {
    navigateToMyPlanExercise("/MyPlan", { state: { showTab: "exercise" } })
  }
  return (
    <>
      <div className='workout-plans'>
        <div className='wrk-txt'>
          <h1>WorkOut</h1>
        </div>
        <div className='wrk-col'>
          <div className='wrk-row' onClick={showWorkoutView}>
            <div className='wrk-imgs'>
              <img src={Yoga1} className="yoga1" alt='/' />
            </div>
            <div className='wrk-title'>
              <div className='wrk-ttl'>
                <h1>Strength Training</h1>
                <div className='srts'>
                  <span>3Sets </span>
                  <span className='rsts'> 15 Sec Rest </span>
                </div>
              </div>
            </div>
            <div className='goto-arrw'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='wrk-row'>
            <div className='wrk-imgs'>
              <img src={Yoga2} className="yoga1" alt='/' />
            </div>
            <div className='wrk-title'>
              <div className='wrk-ttl'>
                <h1>High Intensity</h1>
                <div className='srts'>
                  <span>3Sets </span>
                  <span className='rsts'> 15 Sec Rest  </span>
                </div>
              </div>
            </div>
            <div className='goto-arrw'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='wrk-row'>
            <div className='wrk-imgs'>
              <img src={Yoga3} className="yoga1" alt='/' />
            </div>
            <div className='wrk-title'>
              <div className='wrk-ttl'>
                <h1>Plyometric</h1>
                <div className='srts'>
                  <span>3Sets </span>
                  <span className='rsts'>15 Sec Rest  </span>
                </div>
              </div>
            </div>
            <div className='goto-arrw'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='wrk-row'>
            <div className='wrk-imgs'>
              <img src={Yoga4} className="yoga1" alt='/' />
            </div>
            <div className='wrk-title'>
              <div className='wrk-ttl'>
                <h1>Strength Training</h1>
                <div className='srts'>
                  <span>3Sets </span>
                  <span className='rsts'> 15 Sec Rest </span>
                </div>
              </div>
            </div>
            <div className='goto-arrw'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='wrk-row'>
            <div className='wrk-imgs'>
              <img src={Yoga5} className="yoga1" alt='/' />
            </div>
            <div className='wrk-title'>
              <div className='wrk-ttl'>
                <h1>Strength Training</h1>
                <div className='srts'>
                  <span>3Sets </span>
                  <span className='rsts'> 15 Sec Rest  </span>
                </div>
              </div>
            </div>
            <div className='goto-arrw'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='wrk-row'>
            <div className='wrk-imgs'>
              <img src={Yoga6} className="yoga1" alt='/' />
            </div>
            <div className='wrk-title'>
              <div className='wrk-ttl'>
                <h1>Strength Training</h1>
                <div className='srts'>
                  <span>3Sets </span>
                  <span className='rsts'> 15 Sec Rest  </span>
                </div>
              </div>
            </div>
            <div className='goto-arrw'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
