import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import '../Styles/Subscription.css'
import Header from '../Components/Header'
import Footer from '../Components/footer'

export default function MySubscriptions() {
  return (
    <React.Fragment>
      <Header/>
      <section>
        <Container>
            <Row>
              <Col></Col>
            </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}