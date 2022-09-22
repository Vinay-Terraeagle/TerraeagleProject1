import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import '../Styles/pnf.css'
import badge from '../assets/images/G4.png'
// images
import { StarFill } from 'react-bootstrap-icons'
// medals
import axios from 'axios'
import { BASE_URL, TOKEN } from '../Backend/config';

export default function LeaderBoard() {

  const [LeaderBoarddata, setleaderboarddata] = useState();
  const [leadersrows, setleadersrow] = useState();

  useEffect(() => {
    leaserboarlist();
  }, []);

  const leaserboarlist = () => {
    axios.get(`${BASE_URL}/leader_board`, {
      headers: {
        Authorization: TOKEN
      }
    }).then((response) => {
      console.log(response.data.data)
      const leaderboardData = response.data.data.leaders
      if (leaderboardData !== undefined && leaderboardData.length > 0) {
        const leaderData = leaderboardData.map((item, i) =>
          <div className='rnk-card' key={i}>
            <div className='rnk-icn d-flex-justify-content-center'>
              <StarFill className='starfill' color='#f46154' />
              <span>{item.points} <b>Points</b></span>
            </div>
            <div className='rnkimg d-flex justify-content-center'>
              <img src={item.profile} className="a-icn" alt='/' />
            </div>
            <div className='rnk-txt'>
              <h5>{item.name}</h5>
            </div>
          </div>
        )
        setleaderboarddata(leaderData)
      }
      if (leaderboardData !== undefined && leaderboardData.length > 0) {
    const LeadersData = leaderboardData.map((item,i) =>
        <div className='ldr-cards' key={i}>
          <div className='d-flex align-items-center'>
            <img src={item.profile} className="crdicn mr-1" alt="/" />
            <h5 style={{ marginLeft: '1rem' }}>{item.name}</h5>
          </div>
          <div className='pnts'>
            <h5>{item.points} <b>Points</b></h5>
          </div>
          <div className='rating'>
            <img src={badge} className="firstmed" alt='/' />
          </div>
        </div>
      )
    setleadersrow(LeadersData)
  }

    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <React.Fragment>

      <Header />
      <section>
        <Container>
          <Row>
            <div className='leader-section d-flex justify-content-between pt-5' style={{ alignItems: 'center' }}>
              <div className='plans-txts'>
                <h1>LeaderBoard</h1>
              </div>
            </div>
            <Col className='bg-white rounded-3 p-5 mt-5 leader-col'>
              <div className='tp-rnk d-flex justify-content-center'>
                {LeaderBoarddata}
              </div>
            <div className='listcards'>
                <div className='listview d-flex justify-content-around mt-5 border-bottom'>
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
                  {leadersrows}
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>

  )
}
