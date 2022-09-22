import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../NoDataFound/NoDataFound.moudle.css'
import NoRecipeFoundimage from '../../assets/Lotties/noRecepie.json'
import NoWorkoutsFoundimage from '../../assets/Lotties/workout.json'
import NoHabitFoundimage from '../../assets/Lotties/habits.json'
import NoGroceryFoundimage from '../../assets/Lotties/Grocery.json'
import Lottie from 'react-lottie'


export default function NoDataFound(type) {

    //Lottie
    let WorkoutLottieData = {
        loop: true,
      autoplay: true,
    //   animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };




    const [noDataFoundimage, setNoDataFoundimage] = useState()
    const [noDataFoundLabel, setNoDataFoundLabel] = useState()
    useEffect(() => {
        if(type.type === "workout") {
            WorkoutLottieData.animationData = NoWorkoutsFoundimage
            setNoDataFoundLabel("No Workouts Assigned For Today")
        } else if(type.type === "recipe") {
            WorkoutLottieData.animationData = NoRecipeFoundimage
            setNoDataFoundLabel("No Recipe To Show")
        } else if (type.type === "habit") {
            WorkoutLottieData.animationData = NoHabitFoundimage
            setNoDataFoundLabel("No Habits To Show")
        } else if (type.type === "grocery") {
            WorkoutLottieData.animationData = NoGroceryFoundimage
            setNoDataFoundLabel("No Gorcery List To Show")
        } else {

        }
    },[])
  return (
    <section>
        <Container>
            <Row>
                <Col className='no-data-found-wrapper'>
                <div className='d-flex justify-content-center no-data-found-img'>
                    {/* <img src={noDataFoundimage} width="180px" alt="/"/> */}

                    <Lottie options={WorkoutLottieData} 
                    height={400} 
                    weight={400}/>
                </div>
                <div className='text-center mt-4'>
                    <h5>{noDataFoundLabel}</h5>
                    
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
