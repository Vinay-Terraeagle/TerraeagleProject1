import React,{useState} from 'react'
import './TalkToUs.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Header'
import Footer from '../footer'
import trainer from '../../assets/images/trainer.png'
import Doctor from '../../assets/images/doctor.png'
import therapist from '../../assets/images/therapist.png'
import BookDoctor from './BookDoctor'
import BookTherapist from './BookTherapist'
import Trainer from './BookTrainer'



export default function Talk_to_us() {

  // const [activelist, setactivelist] = useState('trainer')
  
  return (
    <React.Fragment>
      <Header />
      <section>
        <Container>
          <Row>
            <Col>
              <section>
                <div className='container'>
                  <div className='main-col'>
                    <div className='cal-box'>
                      <div className='tdy-dte'>
                        <div className='tdy-col'>
                          <h1>01</h1>
                          <span>August</span>
                          <p>2022</p>
                        </div>
                      </div>
                    </div>
                    <div className='dctr-book'>
                      <div className="calo-crd">
                        <div className='cl-icn'>
                          <img src={trainer} className="trainericon" alt='/' />
                        </div>
                        <div className='dct-txt'>
                          <h1>Trainer</h1>
                        </div>
                      </div>
                      <div className="calo-crd">
                        <div className='cl-icn'>
                          <img src={Doctor} className="doctoricon" alt='/' />
                        </div>
                        <div className='dct-txt'>
                          <h1>Doctor</h1>
                        </div>
                      </div>
                      <div className="calo-crd">
                        <div className='cl-icn'>
                          <img src={therapist} className="therapist" alt='/' />
                        </div>
                        <div className='dct-txt'>
                          <h1>Therapist</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
      <BookDoctor/>
      <Footer />
    </React.Fragment>
  )
}

