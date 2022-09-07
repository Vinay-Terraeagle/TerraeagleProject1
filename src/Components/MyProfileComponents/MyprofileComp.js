import React from "react";
import '../../Styles/Myprofile.css'
import { Container, Row, Col } from 'react-bootstrap'
import bgbckgr from '../../assets/images/background-bg.jpg'
import Usericon from '../../assets/images/user.png'

export default function MyprofileComp() {


  return (
    <React.Fragment>
      <section>
        <Container>
          <Row>
            <Col className='prof-p-bg  rounded'>
              <div className='prof-dwn'>
                <img src={bgbckgr} className="ProfileBg  pt-3" alt="/" />
                <div className='proflie'>
                  <img src={Usericon} alt="/" className='usericn' />

                  <div className='prof-nme d-flex justify-content-between'>
                    <h1>Lorem Ipsom</h1>
                    <span>Update Your photo and profile Details</span>
                  </div>
                  {/* <div className='prof-btns'>
                    <button className='cancel'>Cancel</button>
                    <button className='save'>Save</button>
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className='usr-details'>
              <div className='acc-wrp '>
                <div className='user-det'>
                  <div className='user-heading-txt'>
                    <h1>My Account Informaction</h1>
                  </div>
                  <div className='user-pers-info'>
                    <form className='userform'>
                      <div className='username'>
                        <label>UserName</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div className='username'>
                        <label>First Name </label>
                        <input type="text" placeholder="" />
                      </div>
                      <div className='username'>
                        <label>Last Name :</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div className='username'>
                        <label>Email:</label>
                        <input type="Email" placeholder="" />
                      </div>
                      <div className='username'>
                        <label>Mobile Number:</label>
                        <input type="number" placeholder="" />
                      </div>
                      {/* <div className='username'>
                        <label>Address</label>
                        <input type="address" placeholder="" />
                      </div> */}
                    </form>
                  </div>
                </div>
                {/* <div className='plans-det col-6'>
                  <div className='account-info'>
                    <div className='acct-txt'>
                      <h1>Account Informaction</h1>
                    </div>
                    <form className='acc-infr'>
                      <div className='account-infrm'>
                        <label>Enter old Password</label>
                        <input type="password" className="passwords" />
                      </div>
                      <div className='account-infrm'>
                        <label>Create Password</label>
                        <input type="password" className="passwords" />
                      </div>
                      <div className='account-infrm'>
                        <label>Confirm Password</label>
                        <input type="password" className="passwords" />
                      </div>
                    </form>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}