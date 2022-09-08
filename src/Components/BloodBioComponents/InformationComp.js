import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../../Styles/BloodBiomarker.css'

export default function InformationComp() {
  return (
    <React.Fragment>
      <section>
        <Container>
          <Row>
            <Col>
              <div>
                <h5>Information</h5>
                <span>1. Try an anti-inflammatory diet </span>
                <span>Description Try an anti-inflammatory diet, high in fruits and vegetables and low in saturated fats and refined carbs [R, R].</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
