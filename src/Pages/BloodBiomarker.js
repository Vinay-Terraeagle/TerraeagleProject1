import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import '../Styles/BloodBiomarker.css'
import {Container ,Card ,Row ,Col,} from 'react-bootstrap'
import bodyimg from '../assets/images/bodyimg.png'
export default function BloodBiomarker() {
  return (
    <React.Fragment>
      <Header/>
        <section>
            <Container>
              <Col>
                <Row className="pt-5 mt-2">
                  <h1>Blood BioMarker</h1>
                  <p></p>
                </Row>
                <Row className='bldmrks mt-5 h-25 rounded '>
                  <div></div>
                  <div className='bld-img'>
                    <img src={bodyimg} className="p-2" alt="/"/>
                  </div>
                  <div></div>
                </Row>
              </Col>
            </Container>
        </section>

    </React.Fragment>
  )
}
