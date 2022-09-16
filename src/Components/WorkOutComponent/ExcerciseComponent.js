import React, {useEffect} from 'react'
// import { Row, Col} from "react-bootstrap";
import Yoga1 from "../../assets/images/y6.jpg"
import Yoga2 from "../../assets/images/y7.jpg"
import Yoga3 from "../../assets/images/y8.jpg"
// import Yoga4 from "../../assets/images/y9.jpg"
// import Yoga5 from "../../assets/images/y10.jpg"
// import Yoga6 from "../../assets/images/y11.png"
import '../../Styles/excerciseComponent.css'
import ReactPlayer from 'react-player'
import { useState } from 'react'

// import '../../Styles/excerciseComponent.js';
import '../../Styles/excerciseComponent.css'
// import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import NoDataFound from '../NoDataFound/NoDataFound'


export default function ExcerciseComponent(assignedWorkouts) {

    const [ButtonText, setButtonText] = useState('Start WorkOut');

    // let navigate = useNavigate();
    //     function useNavigateToStrengthTraining(e) {
    //         e.preventDefault();
    //         let path ='/StrengthTraining';
    //         navigate(path)
    //     }

console.log(assignedWorkouts)
const [assignedWorkoutsList, setAssignedWorkoutsList] = useState()
useEffect(() => {
  if(assignedWorkouts.assignedWorkouts.length > 0) {
    const workoutsList = assignedWorkouts.assignedWorkouts.map((item,i) => 
    <Accordion.Item key={i} eventKey={i}>
      <Accordion.Header>
          <div className="col-11 workout-card">
            <div className='wrk-imgs'>
              <img src={item.image} className="yoga1" alt='/'/>
            </div>
            <div className='wrk-title'>
              <h4>{item.name}</h4>
              <div className='srts'>
                  <span>{item.sets} Sets </span>
                  <span className='rsts'> {item.rest} Sec Rest </span>
              </div>
            </div>
            <div className='goto-arrw'></div>
          </div>
      </Accordion.Header>
      <Accordion.Body>
          <div className=' row bg-white rounded-3   border border-light rounded'>
                <div className=' col pg-bdy d-flex justify-content-center'>
                  <div className='rounded w-100'>
                  <div className='date-col d-flex mb-5 justify-content-between align-items-center'>
                      <div className='date-btn'>
                        <h4>Video Jumping Jack</h4>
                        <span className='text-danger unfin'>UNFINISHED</span>
                      </div>
                      <div>
                        <h5>Cardio</h5>
                      </div>
                      <div>
                        <button className='startwrkout' onClick={() => {
                          setButtonText("FINISH");
                          setTimeout(() => {
                            setButtonText("Start Workout")
                          }, 2000);
                        }}>{ButtonText}</button>
                      </div>
                  </div>
                  <div className='vtlink d-flex justify-content-center rounded'>
                    <ReactPlayer
                    url="https://youtu.be/aFi1OqjIyXY"
                    playing={true}
                    volume={1}
                    width="40vw"
                    height="40vh"
                    />
                  </div>
                  <div className='wrkdata mt-5 d-flex justify-content-between align-items-start mb-5'>
                    <div>
                        <h5>Weight</h5>
                        <p>40Kgs</p>
                    </div>
                    <div>
                      <h5>Sets</h5>
                      <p>{item.sets}</p>
                    </div>
                    <div>
                      <h5>Reps :</h5>
                      <span>{item.reps}</span>
                    </div>
                    <div>
                      <h5>Rest (Secs):</h5>
                      <span>{item.rest}</span>
                    </div>
                  </div>
                  <div className='descrip d-flex flex-column'>
                    <h5>Description</h5>
                    <span>1) Keep your arms extended </span>
                    <span>2) Jump from your legs.</span>
                  </div>
                  </div>
                </div>
              </div>
      </Accordion.Body>
    </Accordion.Item>
    )
    setAssignedWorkoutsList(workoutsList)
  } else {
    const noWorkoutData = <NoDataFound type="workout"/>
    setAssignedWorkoutsList(noWorkoutData)
  }
},[]);


  return (
    <React.Fragment>
        <div className='container exercise-container' >
            <h4>Your Todays Workout Plan</h4>
            <Accordion >
             {assignedWorkoutsList}
            </Accordion>
        </div>
    </React.Fragment>
  )
}
