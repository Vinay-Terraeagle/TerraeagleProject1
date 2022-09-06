import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import '../Styles/Subscription.css'
import { Check } from 'react-bootstrap-icons'
import { X } from 'react-bootstrap-icons'


export default function Myaddonplans() {
  return (
    <React.Fragment>
      <Container>
        <Row>
        <Col>
                
                <div className='adonplns'>
                <div className='plncrd col-4'>
                    <div className='plns d-flex justify-content-between align-items-center'>
                    <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div>
                    <div className='viewmore'>
                          <button className='more'>₹<b>4999.00</b><span>/Month</span></button>
                      </div>
                    </div>
                    <div className='plantitle'>
                      <h4>1 Month Exercise = Diet Consultation</h4>
                    </div>
                    <div className='plandet '>
                      <div className='strtdte mt-2 mb-2 d-flex justify-content-between'>
                        <p>8 Excercise Plan</p>
                        <div>
                            <Check color='#00FF00' className='chck'/>
                        </div>
                      </div>
                      <div className='enddte mt-2 mb-2  d-flex justify-content-between'>
                        <p>Mental Wellness</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='validty mt-2 mb-2 d-flex justify-content-between'>
                        <p>1:1 TRaining Session </p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Precision Nutrition</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Full Body Blood Test</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Precision Nutrition</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Blood Biomarker Analysis</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>24x7 Dietitian Support</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Daily Checkin</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Doctor Consultation</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Weekly Nutrition Plan</p>
                        <div>
                          <Check color='#00FF00' className='chck'/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Weekly Dietitian Support</p>
                        <div>
                          <Check color='#00FF00' className='chck'/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Weekly Exercise List</p>
                        <div>
                          <Check color='#00FF00' className='chck'/>
                        </div>
                      </div>
                      <div className='expin d-flex justify-content-between'>
                        <p>Recipes</p>
                        <div>
                          <Check color='#00FF00' className='chck'/>
                        </div>
                      </div>
                    </div>
                    <button className='bynw'>Buy Now</button>
                  </div>
                </div>
              </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
