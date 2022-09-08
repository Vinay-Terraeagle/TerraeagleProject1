import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import '../../Styles/Myprofile.css'
// import {ExclamationTriangleFill} from 'react-bootstrap-icons'
import errimg from '../../assets/images/error.png'
import { Trash } from 'react-bootstrap-icons'


export default function DeleteAccount() {

  return (
    <React.Fragment>
        <Container>
            <Row>
                <Col className='bg-white rounded-bottom d-flex justify-content-center'>
                <div className='dltacc-wrap'>
                  <div>
                    <div>
                    <h4>Delete your Account</h4>
                    </div>
                    <div className='d-flex '>
                    <img src={errimg} className="erroralt" alt="error"/>
                    <span>Deleting your account is permanent and cannot be undone.</span>
                    <img src={errimg} className="erroralt" alt="error"/>
                    </div>
                    <div>
                      <input type="checkbox" className="custom-control-input" id="Breakfast" name="meal_type[]" value="1"/>
                      <label className="custom-control-label" for="Breakfast">
                        <span></span><div> Confirm Account Deletion</div></label></div>
                     <div>
                      <button className='dlttrash'> <Trash/>Delete My Account</button>
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
