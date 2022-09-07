import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import '../../Styles/Myprofile.css'
// import {ExclamationTriangleFill} from 'react-bootstrap-icons'
import errimg from '../../assets/images/error.png'

export default function DeleteAccount() {

  return (
    <React.Fragment>
        <Container>
            <Row>
                <Col className='bg-white rounded-bottom col'>
                <div>
                  <div className='d-flex flex-column'>
                    <div>
                    <h4>Delete your Account</h4>
                    </div>
                    <div className='d-flex text-center justify-center align-content-center'>
                    <img src={errimg} className="erroralt" alt="error"/>
                    <p>Deleting your account is permanent and cannot be undone.</p>
                    <img src={errimg} className="erroralt" alt="error"/>
                    </div>
                    <div >
                    <div class="col-3 d-flex">
                      <input type="checkbox" className="custom-control-input" id="Breakfast" name="meal_type[]" value="1"/>
                      <label class="custom-control-label" for="Breakfast">
                        <span></span><div> Confirm Account Deletion</div></label></div>
                     <div></div>
                    </div>
                    
                    <p></p>
                  </div>
                </div>
                </Col>
            </Row>
        </Container>
    </React.Fragment> 
  )
}
