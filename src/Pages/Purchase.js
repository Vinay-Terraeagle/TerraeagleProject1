import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../Styles/Subscription.css'
import { Check } from 'react-bootstrap-icons'
import { X } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

export default function Purchase() {

  let navigateToPayment = useNavigate()
  const handlePaymentClick = () => {
    navigateToPayment('/Payment')
  } 

  return (
    <React.Fragment>
        <Container>
            <Row>
               
                {/* myplan */}
                <div className='mpln row mt-5'>
                  <div className='plncrd col-4'>
                    <div className='plns d-flex justify-content-between align-items-center'>
                    {/* <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div> */}
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
                      <div className='enddte mt-2 mb-2  d-flex justify-content-between'>
                        <p>Mental Wellness</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte mt-2 mb-2 d-flex justify-content-between'>
                        <p>1:1 TRaining Session </p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte d-flex justify-content-between'>
                        <p>Precision Nutrition</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte d-flex justify-content-between'>
                        <p>Full Body Blood Test</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte d-flex justify-content-between'>
                        <p>Precision Nutrition</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte d-flex justify-content-between'>
                        <p>Blood Biomarker Analysis</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte d-flex justify-content-between'>
                        <p>24x7 Dietitian Support</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte d-flex justify-content-between'>
                        <p>Daily Checkin</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                      <div className='enddte d-flex justify-content-between'>
                        <p>Doctor Consultation</p>
                        <div>
                          <X color='#ff0000' className="dnger"/>
                        </div>
                      </div>
                    </div>
                    <button className='bynw' onClick={handlePaymentClick} >Buy Now</button>
                  </div>
                  {/* second card */}
                  <div className='plnsecrd col-4 ml-2'>
                    <div className='plns d-flex justify-content-between align-items-center'>
                    {/* <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div> */}
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
                    <button className='bynw' onClick={handlePaymentClick}>Buy Now</button>
                  </div>
                  {/* thrd card */}
                  <div className='plnsecrd col-4 ml-2'>
                    <div className='plns d-flex justify-content-between align-items-center'>
                    {/* <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div> */}
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
                    <button className='bynw' onClick={handlePaymentClick}>Buy Now</button>
                  </div>
                  {/* frthcrd */}
                  <div className='plnsecrd col-4 mt-4'>
                    <div className='plns d-flex justify-content-between align-items-center'>
                    {/* <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div> */}
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
                    <button className='bynw' onClick={handlePaymentClick}>Buy Now</button>
                  </div>
                  {/* ffth */}
                  <div className='plnsecrd col-4 ml-2 mt-4'>
                    <div className='plns d-flex justify-content-between align-items-center'>
                    {/* <div className='pln-info'>
                      <span>Diet Consultation</span>
                    </div> */}
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
                    <button className='bynw' onClick={handlePaymentClick}>Buy Now</button>
                  </div>
                 
                </div>
              
            </Row>
        </Container>
    </React.Fragment>
  )
}
