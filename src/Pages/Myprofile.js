
  
import React from 'react'
import '../Styles/Myprofile.css'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import {Container, Col, Row } from 'react-bootstrap'
import bgbckgr from '../assets/images/background-bg.jpg'
import Usericon from '../assets/images/user.png'
// import { Link } from 'react-router-dom'


  export default function Myprofile() {

    return (
      <React.Fragment>
        <Header/>
        {/* myprofile page */}
          <section className='prof-section'>
              <div className='container'>
              <div className='prof-txt'>
                    <h1>Settings</h1>
                </div>
                <div className='prof-links'>
                  <div className='prof-lin'>
                    <h1 className='act'>My Profile</h1>
                  </div>
                  <div className='prof-ep'>
                  <h1>Edit Profile</h1>
                  </div>
                  <div className='prof-acadmin'>
                  <h1>Account Administrator</h1>
                  </div>
                </div>
              </div>
          </section>

       <section>
            <Container>
              <Row>
                <Col className='prof-p-bg  rounded'>
                <div className='prof-dwn'>
                  <img src={bgbckgr} className="ProfileBg  pt-3" alt="/"/>  
                  <div className='proflie'>
                  <img src={Usericon} alt="/" className='usericn'/>
                
                  <div className='prof-nme d-flex justify-content-between'>
                    <h1>Lorem Ipsom</h1>
                    <span>Update Your photo and profile Details</span>
                  </div>
                  <div className='prof-btns'>
                      <button className='cancel'>Cancel</button>
                      <button className='save'>Save</button>
                  </div>
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
                        <h1>Edit Profile</h1>
                      </div>
                      <div className='user-pers-info'>
                          <form className='userform'>
                            <div className='username'>
                              <label>UserName</label>
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className='username'>
                              <label>First Name </label>
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className='username'>
                              <label>Last Name :</label>
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className='username'>
                              <label> Gender </label>
                              <input type="radio" id="html" name="fav_language" value="Female" placeholder="Name" />
                            </div>
                            <div className='username'>
                              <label>Email:</label>
                              <input type="Email" placeholder="Name" />
                            </div>
                            <div className='username'>
                              <label>Mobile Number:</label>
                              <input type="number" placeholder="Name" />
                            </div>
                            <div className='username'>
                              <label>Address</label>
                              <input type="address" placeholder="Name" />
                            </div>
                          </form>
                      </div>
                    </div>
                    <div className='plans-det col-6'>
                      <div className='account-info'>
                        <div className='acct-txt'>
                          <h1>Account Informaction</h1>
                        </div>
                        <form className='acc-infr'>
                          <div className='account-infrm'>
                            <label>Enter old Password</label>
                            <input type="password" className="passwords"/>
                          </div>
                          <div className='account-infrm'>
                            <label>Create Password</label>
                            <input type="password" className="passwords"/>
                          </div>
                          <div className='account-infrm'>
                            <label>Confirm Password</label>
                            <input type="password" className="passwords"/>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer/>

      </React.Fragment>
    )
  }
