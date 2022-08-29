import React from 'react'
import { Container, Col,Row,Card } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/footer'

export default function LeaderBoard() {
  return (
   <React.Fragment>
    <Header/>
      <section>
        <Container>
            <Row>
            <div className='leader-section d-flex justify-content-between pt-5' style={{alignItems: 'center'}}>
                    <div className='plans-txts'>
                        <h1>RaiseTicket</h1>
                    </div>
                    <div>
                        <button className='btn-dash-1'>View my complaints</button>
                    </div>
                </div>
              <Col>
                
              </Col>
            </Row>
        </Container>
      </section>
   </React.Fragment>
  
  )
}
