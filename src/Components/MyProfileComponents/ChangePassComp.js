import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../../Styles/Myprofile.css'
// import axios from 'axios'

export default function ChangePassComp() {

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className='bg-white rounded-bottom'>
                        <div className='password-div'>
                            <div className='chngepasstxt'>
                            <h4>Change Password</h4>
                            </div>
                            <div className='pass-row'>
                                <form className='passform'>
                                <label>Current Password</label>
                                <input id="password_confirmation"  placeholder="Confirm Password" name="password_confirmation" type="password"/>
                                    
                                <label>Change Password</label>
                                <input id="password_confirmation"  placeholder="Confirm Password" name="password_confirmation" type="password"/>
                                    
                                <div>
                                    <button className='savepass'>Save Password</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
