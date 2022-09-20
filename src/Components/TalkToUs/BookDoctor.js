import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './TalkToUs.css'
import Train1 from '../../assets/images/Train1.jpg'
import Train2 from '../../assets/images/Train2.jpg'
import Train3 from '../../assets/images/Train3.jpg'
import Train4 from '../../assets/images/Train4.jpg'
import Train5 from '../../assets/images/Train5.jpg'

export default function BookDoctor() {
  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col className="bookdoctor">
                      {/* crads */}
                      <div className='innercards'>
                        <div>
                          <h4 className='m-4'>Doctors Lists</h4>
                        </div>
                        <div className='dctr-row'>
                          <div className='dctrimg'>
                            <img src={Train1} className="trainnerimgs" alt="Doctor"/>
                            <div className='mt-2'>
                              <h5>Lena Mariana</h5>
                              <span>Senior at Orthopedic</span>
                            </div>
                          </div>
                          <div className='dctr-des'>
                            <div className='dgre'>
                              <span>Degree</span>
                              <h5>MBBS, FCPS</h5>
                            </div>
                            <div className='speci'>
                              <span>Speciality</span>
                              <h5>Senior ot Orthopedic</h5>
                              <h4>5+ years Exp</h4>
                            </div>
                            {/* <div className='exp'>
                              
                            </div> */}
                            {/* <div className='expor'>
                              <span>Bangkok, Thaliand.</span>
                            </div> */}
                          </div>
                          <div className='dctr-yerexp'>
                            <button className='btn-dash-1'>BookDoctor</button>
                          </div>
                        </div>
                        <div className='dctr-row'>
                          <div className='dctrimg'>
                            <img src={Train2} className="trainnerimgs" alt="Doctor"/>
                            <div className='mt-2'>
                              <h5>Hilary Mr</h5>
                              <span>Senior at Orthopedic</span>
                            </div>
                          </div>
                          <div className='dctr-des'>
                            <div className='dgre'>
                              <span>Degree</span>
                              <h5>MBBS, FCPS</h5>
                            </div>
                            <div className='speci'>
                              <span>Speciality</span>
                              <h5>Senior ot Orthopedic</h5>
                              <h4>8+ years Exp</h4>
                            </div>
                          </div>
                          <div className='dctr-yerexp'>
                            <button className='btn-dash-1'>BookDoctor</button>
                          </div>
                        </div>
                        <div className='dctr-row'>
                          <div className='dctrimg'>
                            <img src={Train3} className="trainnerimgs" alt="Doctor"/>
                            <div className='mt-2'>
                              <h5>Misra Guptill</h5>
                              <span>Senior at Orthopedic</span>
                            </div>
                          </div>
                          <div className='dctr-des'>
                            <div className='dgre'>
                              <span>Degree</span>
                              <h5>MBBS, FCPS</h5>
                            </div>
                            <div className='speci'>
                              <span>Speciality</span>
                              <h5>Senior ot Orthopedic</h5>
                              <h4>10+ years Exp</h4>
                            </div>
                            {/* <div className='exp'>
                              
                            </div> */}
                            {/* <div className='expor'>
                              <span>Bangkok, Thaliand.</span>
                            </div> */}
                          </div>
                          <div className='dctr-yerexp'>
                            <button className='btn-dash-1'>BookDoctor</button>
                          </div>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
