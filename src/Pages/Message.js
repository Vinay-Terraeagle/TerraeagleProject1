import React from 'react'
import '../Styles/RaiseTicket.css'
import {Container, Col, Row} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Header from '../Components/Header'


export default function Message() {
  return (
    <React.Fragment>
      <Header/>
      <section>
        <Container>
          <Row>
            <Col>
            <h1>Msg Section</h1></Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
