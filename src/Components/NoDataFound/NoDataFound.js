import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../NoDataFound/NoDataFound.moudle.css'
import NoRecipeFoundimage from '../../assets/images/recipesnotfound.png'
import NoWorkoutsFoundimage from '../../assets/images/no-wrokouts-img.png'
import NoHabitFoundimage from '../../assets/images/no-habit-img.png'
import NoGroceryFoundimage from '../../assets/images/no-habit-img.png'



export default function NoDataFound(type) {
    const [noDataFoundimage, setNoDataFoundimage] = useState()
    const [noDataFoundLabel, setNoDataFoundLabel] = useState()
    useEffect(() => {
        if(type.type === "workout") {
            setNoDataFoundimage(NoWorkoutsFoundimage)
            setNoDataFoundLabel("No Workouts Assigned For Today")
        } else if(type.type === "recipe") {
            setNoDataFoundimage(NoRecipeFoundimage)
            setNoDataFoundLabel("No Recipe To Show")
        } else if (type.type === "habit") {
            setNoDataFoundimage(NoHabitFoundimage)
            setNoDataFoundLabel("No Habits To Show")
        } else if (type.type === "grocery") {
            setNoDataFoundimage(NoGroceryFoundimage)
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
                    <img src={noDataFoundimage} width="180px" alt="/"/>
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
