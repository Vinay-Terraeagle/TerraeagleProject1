import React from 'react'
import '../Styles/pnf.css'
import { Container, Col, Row } from 'react-bootstrap'

export default function PageNotFound() {
  return (
    <React.Fragment>
      <section>
        <Container>
          <Row>
            <Col className='errrorr'>
            <div className='d-flex align-items-center'>
              <h1 className='mr-2'>404</h1>
              <span className='linearrww'>This page could not be found.</span>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
