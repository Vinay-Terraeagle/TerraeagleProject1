import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './TalkToUs.css'
import Train1 from '../../assets/images/Train1.jpg'
import Train2 from '../../assets/images/Train2.jpg'
import Train3 from '../../assets/images/Train3.jpg'
import Train4 from '../../assets/images/Train4.jpg'
import Train5 from '../../assets/images/Train5.jpg'

export default function BookDoctor() {
  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col className="bookdoctor">
                      {/* crads */}
                      <div className='innercards'>
                        <div></div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
