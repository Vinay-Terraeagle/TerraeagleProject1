import React from 'react'
import { Container, Row ,Col, Card } from 'react-bootstrap'
import '../Styles/Subscription.css'
// import { ArrowRightShort } from 'react-bootstrap-icons'

export default function Activeplan() {
  return (
    <React.Fragment>
        <Container>
            <Row>
                <Col className='mb-5'>
                {/* myplan */}
                <div className='myplan d-flex'>
                  <div className='plncrd'>
                    <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div>
                    <div className='plantitle'>
                      <h4>3 Month Comprehensive Plan</h4>
                    </div>
                    <div className='plandet '>
                      <div className='status mt-2 mb-2 d-flex justify-content-between'>
                        <p>Plan Status</p>
                        <div>
                          <span className='myplnactive'>Active</span>
                        </div>
                      </div>
                      <div className='strtdte mt-2 mb-2 d-flex justify-content-between'>
                        <p>Start Date</p>
                        <div>
                          <span className='due'>22/08/2020</span>
                        </div>
                      </div>
                      <div className='enddte mt-2 mb-2  d-flex justify-content-between'>
                        <p>End Date</p>
                        <div>
                          <span className='due'>21/08/2021</span>
                        </div>
                      </div>
                      <div className='validty mt-2 mb-2 d-flex justify-content-between'>
                        <p>validity</p>
                        <div>
                          <span className='val'>90 Days</span>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Expires in</p>
                        <div>
                          <span className='exp d-flex justify-content-between'>87</span>
                        </div>
                      </div>
                      {/* <div className='viewmore'>
                          <button className='more'>View More <ArrowRightShort/></button>
                      </div> */}
                    </div>
                  </div>
                  <div className='nxtcd ml-5'>
                    <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div>
                    <div className='plantitle'>
                      <h4>3 Month Comprehensive Plan</h4>
                    </div>
                    <div className='plandet '>
                      <div className='status mt-2 mb-2 d-flex justify-content-between'>
                        <p>Plan Status</p>
                        <div>
                          <span className='myplnactive'>Active</span>
                        </div>
                      </div>
                      <div className='strtdte mt-2 mb-2 d-flex justify-content-between'>
                        <p>Start Date</p>
                        <div>
                          <span className='due'>22/08/2020</span>
                        </div>
                      </div>
                      <div className='enddte mt-2 mb-2  d-flex justify-content-between'>
                        <p>End Date</p>
                        <div>
                          <span className='due'>21/08/2021</span>
                        </div>
                      </div>
                      <div className='validty mt-2 mb-2 d-flex justify-content-between'>
                        <p>validity</p>
                        <div>
                          <span className='val'>90 Days</span>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Expires in</p>
                        <div>
                          <span className='exp d-flex justify-content-between'>87</span>
                        </div>
                      </div>
                      {/* <div className='viewmore'>
                          <button className='more'>View More <ArrowRightShort/></button>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Addonplan */}
                <div className='addonplans'>
                  <div className='adtxt'>
                      <h5>My Addon plans</h5>
                  </div>
                <div className='addplan ml-5'>
                    <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div>
                    <div className='plantitle'>
                      <h4>3 Month Comprehensive Plan</h4>
                    </div>
                    <div className='plandet '>
                      <div className='status mt-2 mb-2 d-flex justify-content-between'>
                        <p>Plan Status</p>
                        <div>
                          <span className='myplnactive'>Active</span>
                        </div>
                      </div>
                      <div className='strtdte mt-2 mb-2 d-flex justify-content-between'>
                        <p>Start Date</p>
                        <div>
                          <span className='due'>22/08/2020</span>
                        </div>
                      </div>
                      <div className='enddte mt-2 mb-2  d-flex justify-content-between'>
                        <p>End Date</p>
                        <div>
                          <span className='due'>21/08/2021</span>
                        </div>
                      </div>
                      <div className='validty mt-2 mb-2 d-flex justify-content-between'>
                        <p>validity</p>
                        <div>
                          <span className='val'>90 Days</span>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Expires in</p>
                        <div>
                          <span className='exp d-flex justify-content-between'>87</span>
                        </div>
                      </div>
                      {/* <div className='viewmore'>
                          <button className='more'>View More <ArrowRightShort/></button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}
