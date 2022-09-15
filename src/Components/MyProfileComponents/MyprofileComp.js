import React from "react";
import '../../Styles/Myprofile.css'
import { Container, Row, Col } from 'react-bootstrap'
// import bgbckgr from '../../assets/images/background-bg.jpg'
import coverimg from '../../assets/images/backgroundimg.jpg'
import Usericon from '../../assets/images/user.png'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, TOKEN } from '../../Backend/config';

export default function MyprofileComp() {

  const [name, setname] = useState();
  const [userlastname, setlastname] = useState();
  const [usermame, setusername] = useState();
  // const [email, setEmail] = useState();
  const [mob, setMob] = useState()

  useEffect(() => {
    axios.get(`${BASE_URL}/profile/Deepti22/edit`, {
      headers: {
        Authorization: TOKEN
      }
    }).then((response) => {
      setname(response.data.data.user.name)
      // setEmail(response.data.data.user.email)
      setMob(response.data.data.user.mobile_number)
      setusername(response.data.data.user.first_name)
      setlastname(response.data.data.user.last_name)

    }).catch((error) => {
      console.log(error)
    })
  },[]);
  


  return (
    <React.Fragment>
      <pre></pre>
      <section>
        <Container>
          <Row>
            <Col className='prof-p-bg  rounded'>
              <div className='prof-dwn'>
                <img src={coverimg} className="ProfileBg  pt-3" alt="/" />
                <div className='proflie'>
                  <img src={Usericon} alt="/" className='usericn' />
                </div>
                <div className="contentbox">
                  <div className="mb-2">
                    <h2><b>{usermame}</b> <b>{userlastname}</b> </h2>
                  </div>
                  <div>
                    <h5><b>{name}</b></h5>
                    <h6>Mobile Number: <b>{mob}</b></h6>
                  </div>
                  <div></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {/* <Col className='usr-details'>
              <div className='acc-wrp '>
                <div className='user-det'>
                  <div className='user-heading-txt'>
                    <h1>My Account Informaction</h1>
                  </div>  
                  <div className='user-pers-info'>
                    {/* <form className='userform'>
                      <div className='username'>
                        <label>UserName</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div className='username'>
                        <label>Name </label>
                        <input type="text" placeholder="" />
                      </div>
                      <div className='username'>
                        <label>Email:</label>
                        <input type="Email" placeholder="" />
                      </div>
                      {/* <div className='username'>
                        <label>Mobile Number:</label>
                        <input type="Email" placeholder="" />
                      </div> 
                    </form> 
                  </div>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}