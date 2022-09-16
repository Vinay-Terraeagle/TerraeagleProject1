import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../../Styles/app.css'
import NoDataFound from '../NoDataFound/NoDataFound';

export default function WorkoutCompo(workoutList) {
  const [workoutDataList, setWorkoutDataList] = useState()
  useEffect(() => {
    if(workoutList.WorkoutCompo.length > 0) {
      const workouts = workoutList.WorkoutCompo.map((item,i) => 
        <div className='wrk-row' onClick={showWorkoutView} key={i}>
          <div className='wrk-imgs'>
            <img src={item.image} className="yoga1" alt='/' />
          </div>
          <div className='wrk-title'>
            <div className='wrk-ttl'>
              <h1>{item.name}</h1>
              <span style={{margin:'-1rem'}}>{item.category}</span>
              <div className='srts'>
                <span className='p-2'>{item.sets} Sets </span>
                <span className='p-2'> {item.rest} Sec Rest </span>
                <span className='rsts p-2'> {item.reps} Reps </span>
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
      )
      setWorkoutDataList(workouts)
    } else {
      setWorkoutDataList(<NoDataFound type="workout"/>)
    }

  },[]);

  const navigateToMyPlanExercise = useNavigate();
  const showWorkoutView = () => {
    navigateToMyPlanExercise("/MyPlan", { state: { showTab: "exercise" } })
  }
  
  return (
    <>
      <div className='workout-plans'>
        <div className='wrk-txt'>
          <h5>WorkOut</h5>
        </div>
        <div className="wrk-col">
          {workoutDataList}
        </div>
      </div>
    </>
  )
}
