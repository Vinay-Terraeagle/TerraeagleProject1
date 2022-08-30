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
              <Col className='bg-white rounded-3 p-5 mt-5 col'>

              </Col>
            </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
