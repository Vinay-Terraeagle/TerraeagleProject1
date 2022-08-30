import React from 'react'
import { Container, Row ,Col, Card } from 'react-bootstrap'
import '../Styles/Subscription.css'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import { ArrowRightShort } from 'react-bootstrap-icons'


export default function Subscriptionplan() {
  return (
    <React.Fragment>
      <Header/>
      <section>
        <Container>
            <Row>
            <div className='leader-section d-flex justify-content-between pt-5' style={{alignItems: 'center'}}>
                    <div className='plans-txts'>
                        <h1>MySubscriptions</h1>
                    </div>
                    <div>
                        <button className='btn-dash-1'>My Profile </button>
                    </div>
                </div>
              <Col>
                {/* My plan tablist */}
                <div className='myplantablist'>
                  <button className='activeplan'>My Active Plans</button>
                  <button className='addonplan'>My Active Addon Plans</button>
                  <button className='addonplan'>Purchese NewPlan</button>
                  {/* <button className='addonplan'></button> */}
                </div>

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
                      <div className='viewmore'>
                          <button className='more'>View More <ArrowRightShort/></button>
                      </div>
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
                      <div className='viewmore'>
                          <button className='more'>View More <ArrowRightShort/></button>
                      </div>
                    </div>
                  </div>
                </div>

              </Col>
            </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
