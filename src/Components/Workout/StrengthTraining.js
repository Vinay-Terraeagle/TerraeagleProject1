import React, {useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Header from '../Header'
import Footer from '../footer'
import '../../Styles/excerciseComponent.css'
import ReactPlayer from 'react-player'

export default function StrengthTraining() {

  const [ButtonText, setButtonText] = useState('Start WorkOut');



  // function handleClick() {
  //   setButtonText('FINISH')
  // }

  return (
    <React.Fragment>
      <Header/>
      <section>
        <Container>
          <Col>
            <Row className='bg-white rounded-3 mt-5  border border-light rounded'>
              <Col className='pg-bdy d-flex justify-content-center'>
                <div className='border border-3 p-4 rounded w-75'>
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
                 <div className='wrkdata mt-5 d-flex justify-content-around align-items-start mb-5'>
                  <div>
                      <h5>Weight</h5>
                      <p>40Kgs</p>
                  </div>
                  <div>
                    <h5>Sets</h5>
                    <p>02</p>
                  </div>
                  <div>
                    <h5>Reps :</h5>
                    <span>50</span>
                  </div>
                  <div>
                    <h5>Rest (Secs):</h5>
                    <span>15</span>
                  </div>
                 </div>
                 <div className='descrip d-flex flex-column'>
                  <h5>Description</h5>
                  <span>1) Keep your arms extended </span>
                  <span>2) Jump from your legs.</span>
                 </div>
                 </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>
      <Footer/> 
    </React.Fragment>
  )
}
