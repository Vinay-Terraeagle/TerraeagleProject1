import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../NoDataFound/NoDataFound.moudle.css'
import NoDataFoundimage from '../../assets/images/recipesnotfound.png'

export default function NoDataFound() {
  return (
    <section>
        <Container>
            <Row>
                <Col>
                <div className='d-flex justify-content-center'>
                    <img src={NoDataFoundimage} width="180px" alt="/"/>
                </div>
                <div className='text-center'>
                    <h5>No Recipe To Show</h5>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
