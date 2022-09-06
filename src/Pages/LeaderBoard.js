import React, {useEffect} from 'react'
import { Container, Col,Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import '../Styles/pnf.css'
// images
import User from '../assets/images/usericn.png';
import bdge from '../assets/images/badge.png'
import { StarFill } from 'react-bootstrap-icons'
// medals
import first from '../assets/images/G1.png'
import second from '../assets/images/G2.png'
import Third from '../assets/images/G3.png'
import forth from '../assets/images/G4.png'
import axios from 'axios'

export default function LeaderBoard() {

  useEffect(() => {
    axios.get('https://revdev.revibe.in/api/leader_board',{
      headers:{
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZTc0MzI5MThmYmIxNzQ2NjEzYzJjZWUyMWNmMTI5MzM1NDM0NTg1OThhYjI2YTBlNGZlM2IzNGQyZWRlYzYxMWJjZGJlZTc2MGRkZTllYzEiLCJpYXQiOjE2NjIyMTE4MzIuOTk1ODMxLCJuYmYiOjE2NjIyMTE4MzIuOTk1ODM1LCJleHAiOjE2OTM3NDc4MzIuOTkwMTE2LCJzdWIiOiIxMjkiLCJzY29wZXMiOltdfQ.hVglBoyWq-HPxTrEz5tKqCDqnKcpnKhEZb6qPfgaPjvcjHWptbX3M0Y_RVIIKXx4IWC9IAbu2SlTlNU4uskG8zgLIYh4BsNuBcaI4eDjqCLsYsXf0gj60lCFGwzsnxPHAOPwQNa_ny4-BUn2fkAFa2v_eFj6SBq8TLDkNwc8RlEWIve10Q7o0WN2kmeTDPQS0sb7ygf7sI4wUt7i09EXT0p1PrO62ZsldErR3plancWzfXhIkldOmaY92mOFFVO2lbUBeABU3dfv-tyM1olNBoO0TGHcw6afRTbEXNfX3NzTGNb7q2V5Te0SX7cR7lNNDcjKrmMe1ze_jGwE6mthMrOne1_D1ZzAIvwcV3SU8wG0rt1G3QXGNiHCtnLxXPc-d8v7ARB-VOYyimHyhrsCT8BTX1IWw3bs-kxUV5qEQDykkxiYKU59iYf9AP2uFOJB1jFunJ8NPcEiyZvipWR54sRpC_1xvZnAsuwqNq0wlTsLfgusWSejnOTVzMS5Mdj8dPgqzhhCmB1zwiZPtHQPz5wPXxoTqqEzQD7VgJFb7SrxnrmYuq3RT-b-73pIiMZmbC6LFjk5C2LbWvgwFKgNje-eXahfPBUb_CwW9V74eYiB_vVhPkdql-EMu_fgKG72nf8j-E5c6iNhNMYeBUW3qEEKjegdNjCR8rpA9gJ_bOo"
      }
    }).then((response) => {
      // console.log(response)
      // const resData = response.data.data.leaders[0];
      const arr1 = response.data.data.leaders[0];
      const arr2 = response.data.data.leaders[1];
      console.log(arr1)
      console.log(arr2)
      // const arr1 = response.data.data.leaders;
      // console.log(resData)
    }).catch((error) => {
      console.log(error)
    })
  })


  return (
   <React.Fragment>
    <Header/>
      <section>
        <Container>
            <Row>
            <div className='leader-section d-flex justify-content-between pt-5' style={{alignItems: 'center'}}>
                    <div className='plans-txts'>
                        <h1>LeaderBoard</h1>
                    </div>
                    <div>
                        <button className='btn-dash-1'>View my </button>
                    </div>
                </div>
              <Col className='bg-white rounded-3 p-5 mt-5'>
              <div className='ledr-btns d-flex justify-content-end'>
                <div className='bordsection'>
                  <button className='mnth'>Month</button>
                  <button className='wek'>Week</button>
                  <button className='altime'>All Time</button>
                </div>
              </div>
                <div className='tp-rnk d-flex justify-content-center'>
                  <div className='rnk-card'>
                    <div className='rnkimg d-flex justify-content-center'>
                    <img src={bdge} className="a-icn" alt='/'/>
                    </div>
                    <div className='rnk-usr d-flex justify-content-center'>
                      <img src={User} className="usricn" alt='/'/>
                    </div>
                    <div className='rnk-txt'>
                      <p>Lear</p>
                      <div className='rnk-icn'>
                        <StarFill className='starfill' color='#f46154'/>
                        <span>2500 <b>Points</b></span>
                      </div>
                    </div>
                  </div>
                  <div className='rnk-card'>
                    <div className='rnkimg d-flex justify-content-center'>
                    <img src={bdge} className="a-icn" alt='/'/>
                    </div>
                    <div className='rnk-usr d-flex justify-content-center'>
                      <img src={User} className="usricn" alt='/'/>
                    </div>
                    <div className='rnk-txt'>
                      <p>Jhone_Doe</p>
                      <div className='rnk-icn'>
                        <StarFill className='starfill' color='#f46154'/>
                        <span>2500 <b>Points</b></span>
                      </div>
                    </div>
                  </div>
                  <div className='rnk-card'>
                    <div className='rnkimg d-flex justify-content-center'>
                    <img src={bdge} className="a-icn" alt='/'/>
                    </div>
                    <div className='rnk-usr d-flex justify-content-center'>
                      <img src={User} className="usricn" alt='/'/>
                    </div>
                    <div className='rnk-txt'>
                      <p>Jhone_Doe</p>
                      <div className='rnk-icn'>
                        <StarFill className='starfill' color='#f46154'/>
                        <span>2500 <b>Points</b></span>
                      </div>
                    </div>
                  </div>
                  {/* card is over */}

                  {/* lists */}
                </div>
                <div className='listcards'>
                    <div className='listview d-flex justify-content-around mt-5 border-bottom'>
                      <div>
                        <span>S.No</span>
                      </div>
                      <div>
                        <span>User</span>
                      </div>
                      <div>
                        <span>Points</span>
                      </div>
                      <div>
                        <span>Recent Badge</span>
                      </div>
                    </div>
                    <div className='ldr-cardmin'>
                      <div className='ldr-cards'>
                        <div className='usic d-flex align-items-center justify-content-between'>
                          <span className='SNo'>1St</span>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img src={User} className="crdicn mr-1" alt="/"/>
                            <h5 style={{margin:'0rem'}}>Jhone_Doe</h5>
                            {/* <span>@ClientUserName</span> */}
                          </div>
                        <div className='pnts'>
                        <h5>5000 <b>Points</b></h5>
                        </div>
                        <div className='rating'>
                          <img src={first} className="firstmed" alt='/'/>
                        </div>
                      </div>
                      <div className='ldr-cards'>
                        <div className='usic d-flex align-items-center justify-content-between'>
                          <span className='SNo'>2St</span>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img src={User} className="crdicn mr-1" alt="/"/>
                            <h5 style={{margin:'0rem'}}>Jhone_Doe</h5>
                            {/* <span>@ClientUserName</span> */}
                          </div>
                        <div className='pnts'>
                        <h5>3000 <b>Points</b></h5>
                        </div>
                        <div className='rating'>
                          <img src={second} className="firstmed" alt='/'/>
                        </div>
                      </div>
                      <div className='ldr-cards'>
                        <div className='usic d-flex align-items-center justify-content-between'>
                          <span className='SNo'>3St</span>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img src={User} className="crdicn mr-1" alt="/"/>
                            <h5 style={{margin:'0rem'}}>Jhone_Doe</h5>
                            {/* <span>@ClientUserName</span> */}
                          </div>
                        <div className='pnts'>
                        <h5>2000 <b>Points</b></h5>
                        </div>
                        <div className='rating'>
                          <img src={Third} className="firstmed" alt='/'/>
                        </div>
                      </div>
                      <div className='ldr-cards'>
                        <div className='usic d-flex align-items-center justify-content-between'>
                          <span className='SNo'>4St</span>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img src={User} className="crdicn mr-1" alt="/"/>
                            <h5 style={{margin:'0rem'}}>Jhone_Doe</h5>
                            {/* <span>@ClientUserName</span> */}
                          </div>
                        <div className='pnts'>
                        <h5>1000 <b>Points</b></h5>
                        </div>
                        <div className='rating'>
                          <img src={forth} className="firstmed" alt='/'/>
                        </div>
                      </div>
                      <div className='ldr-cards'>
                        <div className='usic d-flex align-items-center justify-content-between'>
                          <span className='SNo'>5St</span>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img src={User} className="crdicn mr-1" alt="/"/>
                            <h5 style={{margin:'0rem'}}>Jhone_Doe</h5>
                            {/* <span>@ClientUserName</span> */}
                          </div>
                        <div className='pnts'>
                        <h5>500 <b>Points</b></h5>
                        </div>
                        <div className='rating'>
                          <img src={forth} className="firstmed" alt='/'/>
                        </div>
                      </div>
                      <div className='ldr-cards'>
                        <div className='usic d-flex align-items-center justify-content-between'>
                          <span className='SNo'>6St</span>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img src={User} className="crdicn mr-1" alt="/"/>
                            <h5 style={{margin:'0rem'}}>Jhone_Doe</h5>
                            {/* <span>@ClientUserName</span> */}
                          </div>
                        <div className='pnts'>
                        <h5>500 <b>Points</b></h5>
                        </div>
                        <div className='rating'>
                          <img src={forth} className="firstmed" alt='/'/>
                        </div>
                      </div>
                      <div className='ldr-cards'>
                        <div className='usic d-flex align-items-center justify-content-between'>
                          <span className='SNo'>7St</span>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img src={User} className="crdicn mr-1" alt="/"/>
                            <h5 style={{margin:'0rem'}}>Jhone_Doe</h5>
                            {/* <span>@ClientUserName</span> */}
                          </div>
                        <div className='pnts'>
                        <h5>500 <b>Points</b></h5>
                        </div>
                        <div className='rating'>
                          <img src={forth} className="firstmed" alt='/'/>
                        </div>
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
