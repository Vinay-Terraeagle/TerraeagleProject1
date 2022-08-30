import React from 'react'
import { Container, Row ,Col, Card } from 'react-bootstrap'
import '../Styles/Subscription.css'
import Header from '../Components/Header'
import Footer from '../Components/footer'

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
                  <button>My Active Plans</button>
                  <button>My Active Addon Plans</button>
                </div>

              </Col>
            </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
