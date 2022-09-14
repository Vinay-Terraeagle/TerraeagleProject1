import React from 'react'
import { Container, Col, Row, Modal } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import '../../Styles/Myprofile.css'
import {ExclamationTriangleFill} from 'react-bootstrap-icons'
import {CheckCircleFill} from 'react-bootstrap-icons'
// import errimg from '../../assets/images/error.png'
// import { Trash } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'


export default function DeleteAccount() {

  let navigateToLogin = useNavigate()
  const handleLoginClick = () => {
    navigateToLogin('/')
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          {/* <Col className='bg-white rounded-bottom d-flex justify-content-center'> 
            <div className='dltacc-wrap'>
              <div>
                <div>
                  <h4>Delete your Account</h4>
                </div>
                <div className='d-flex '>
                  <img src={errimg} className="erroralt" alt="error" />
                  <span>Deleting your account is permanent and cannot be undone.</span>
                  <img src={errimg} className="erroralt" alt="error" />
                </div>
                 <form>
                  <div>
                    <input type="checkbox" className="custom-control-input" id="Breakfast" name="meal_type[]" value="1" />
                    <label className="custom-control-label" for="Breakfast" required >
                      <span></span><div> Confirm Account Deletion</div></label>
                  </div>
                  <div className='d-flex justify-content-center m-2'>
                    <button type='submit' className='dlttrash'> 
                    <Trash />Delete My Account</button>
                  </div>
                </form> 
                <form></form>
                <p></p>
              </div>
              <div className='passwordchange_success'>
                <h3>Delete account</h3>
                <ExclamationTriangleFill />
                <h5>Are you sure you want to delete your account? this will permanently erase your account.</h5>
              </div>
            </div>
          </Col> */}
          <Col className='bg-white rounded-bottom'>
                        <div className='password-div'>
                            <div className='pass-row'>
                                <form className='passform'>
                                <h3>Delete Your Account</h3>
                                <div  className='invalid-feedback'></div> 
                               <div>
                               <input type="checkbox" className="custom-control-input" id="Breakfast" name="meal_type[]" value="1" />
                              <label className="custom-control-label" for="Breakfast" required >
                              <span></span><div> <h5 style={{margin:'0rem'}}>Confirm Account Deletion</h5></div></label>
                               </div>
                                <div className="invalid-feedback"></div>
                                <div className='mt-3 d-flex justify-content-center'>
                                    <button className='savepass' onClick={handleLoginClick} type='submit'>Delete Account</button>
                                </div>

                                {/* password change alert */}
                                {/* <div className='passwordchange_success d-flex justify-content-center mt-5 align-items-baseline'>
                                    <CheckCircleFill className='mr-1' style={{fontSize:'20px',color:'green'}}/>
                                    <h5>Account delete Successfully</h5>
                                </div> */}
                                </form>
                            </div>
                        </div>
                    </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
