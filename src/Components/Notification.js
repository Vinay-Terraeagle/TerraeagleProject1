import React from 'react'
import '../Styles/Notification.css'
import { Container, Col , Row } from 'react-bootstrap'

export default function Notification() {
  return (
    <React.Fragment>
      {/* <section>
        <Container>
          <Row>
            <Col>
                <div className='pt-5 topbar d-flex align-items-center'>
                  <h1 style = {{ fontSize: '2rem'}}>Notifications</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#e06358" className="Noti" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
                </div>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>            
      </section> */}

      <section>
        <Container>
          <Row>
            <Col style={{ background: '#fff'}} className="mt-5 p-5 notifyc">
                <div className='p-4 col-10 notify'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8b8b8b" className="close" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
                </div>
                  <div className='nxttxt d-flex justify-content-between'>
                    <h1>Notification text</h1>
                    <p className='ml-2'>Notifications description</p>
                  </div>
                  <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8b8b8b" className="close" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
                </div>
                </div>
                <div className='p-4 col-10 notify'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8b8b8b" className="close" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
                </div>
                  <div className='nxttxt d-flex justify-content-between'>
                    <h1>Notification text</h1>
                    <p className='ml-2'>Notifications description</p>
                  </div>
                  <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8b8b8b" className="close" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
                </div>
                </div>
                <div className='p-4 col-10 notify'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8b8b8b" className="close" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
                </div>
                  <div className='nxttxt d-flex justify-content-between'>
                    <h1>Notification text</h1>
                    <p className='ml-2'>Notifications description</p>
                  </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#8b8b8b" className="close" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
                </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
