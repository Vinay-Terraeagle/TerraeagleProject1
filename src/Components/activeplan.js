import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Styles/Subscription.css'
import moment from 'moment';

export default function Activeplan(subscriptionData) {

  const [subsList, setsubsList] = useState();

  console.log(subscriptionData)

    useEffect(() => {
      if(subscriptionData.activeplans !== undefined) {
        if(subscriptionData.activeplans.length > 0) {
          const planList = subscriptionData.activeplans.map((item, i) =>
            <div className='plncrd' data-id={item.id} key={i}>
              <div className='plantitle'>
                <h4>{item.plan}</h4>
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
                    <span className='due'>
                    {
                      moment(item.created_at).format("DD-MM-YYYY")
                    }
                    </span>
                  </div>
                </div>
                <div className='enddte mt-2 mb-2  d-flex justify-content-between'>
                  <p>End Date</p>
                  <div>
                    <span className='due'>
                    {
                      moment(item.created_at).format("DD-MM-YYYY")
                    }
                    </span>
                  </div>
                </div>
                <div className='validty mt-2 mb-2 d-flex justify-content-between'>
                  <p>validity</p>
                  <div>
                    <span className='val'>
                      {
                        moment(item.created_at).format("MM")
                      }
                    </span>
                  </div>
                </div>
                <div className='expin d-flex justify-content-between'>
                  <p>Expires in</p>
                  <div>
                    <span className='expl d-flex justify-content-between'>
                    {
                        moment(item.ends_at).format("MM")
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
          setsubsList(planList)
        }
      }

     
    },[subscriptionData.activeplans])
      



  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className='mb-5'>
            {/* myplan */}
            <div className='myplan d-flex'>

              {subsList}

              {/* <div className='nxtcd ml-5'>
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
                          <span className='expl d-flex justify-content-between'>87</span>
                        </div>
                      </div>
                      {/* <div className='viewmore'>
                          <button className='more'>View More <ArrowRightShort/></button>
                      </div> 
                    </div>
                  </div> */}
            </div>

            {/* Addonplan */}
            {/* <div className='addonplans'>
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
                          <span className='expl d-flex justify-content-between'>87</span>
                        </div>
                      </div>
                      {/* <div className='viewmore'>
                          <button className='more'>View More <ArrowRightShort/></button>
                      </div> 
                    </div>
                  </div>
                </div> */}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
