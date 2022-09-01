import React from 'react'
import { Row, Col} from "react-bootstrap";
import Yoga1 from "../assets/images/y6.jpg"
import Yoga2 from "../assets/images/y7.jpg"
import Yoga3 from "../assets/images/y8.jpg"
import Yoga4 from "../assets/images/y9.jpg"
import Yoga5 from "../assets/images/y10.jpg"
import Yoga6 from "../assets/images/y11.png"

export default function excerciseComponent() {
  return (
    <React.Fragment>
        <div className='container exercise-container'>
            <h4>Your Todays Workout Plan</h4>
            <Row>
                <Col className='col-5 workout-card'>
                    <div className='wrk-imgs'>
                        <img src={Yoga1} className="yoga1" alt='/'/>
                    </div>
                    <div className='wrk-title'>
                        <h4>Strength Training</h4>
                        <div className='srts'>
                            <span>3 Sets </span>
                            <span className='rsts'> 15 Sec Rest </span>
                        </div>
                    </div>
                    <div className='goto-arrw'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </Col>
                <Col className='col-5 workout-card '>
                    <div className='wrk-imgs'>
                        <img src={Yoga2} className="yoga1" alt='/'/>
                    </div>
                    <div className='wrk-title'>
                        <h4>High Intensity</h4>
                        <div className='srts'>
                            <span>3Sets </span>
                            <span className='rsts'> 15 Sec Rest  </span>
                        </div>
                    </div>
                    <div className='goto-arrw'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </Col>

                <Col className='col-5 workout-card '>
                    <div className='wrk-imgs'>
                        <img src={Yoga3} className="yoga1" alt='/'/>
                    </div>
                    <div className='wrk-title'>
                        <h4>Plyometric</h4>
                        <div className='srts'>
                        <span>3Sets </span>
                        <span className='rsts'>15 Sec Rest  </span>
                        </div>
                    </div>
                    <div className='goto-arrw'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </Col>

                <Col className='col-5 workout-card '>
                    <div className='wrk-imgs'>
                        <img src={Yoga4} className="yoga1" alt='/'/>
                    </div>
                    <div className='wrk-title'>
                        <h4>Strength Training</h4>
                        <div className='srts'>
                        <span>3Sets </span>
                        <span className='rsts'> 15 Sec Rest </span>
                        </div>
                    </div>
                    <div className='goto-arrw'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </Col>

                <Col className='col-5 workout-card '>
                    <div className='wrk-imgs'>
                        <img src={Yoga5} className="yoga1" alt='/'/>
                    </div>
                    <div className='wrk-title'>
                        <h4>Strength Training</h4>
                        <div className='srts'>
                        <span>3Sets </span>
                        <span className='rsts'> 15 Sec Rest  </span>
                        </div>
                    </div>
                    <div className='goto-arrw'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </Col>

                <Col className='col-5 workout-card '>
                    <div className='wrk-imgs'>
                        <img src={Yoga6} className="yoga1" alt='/'/>
                    </div>
                    <div className='wrk-title'>
                        <h4>Strength Training</h4>
                        <div className='srts'>
                        <span>3Sets </span>
                        <span className='rsts'> 15 Sec Rest  </span>
                        </div>
                    </div>
                    <div className='goto-arrw'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </Col>
            </Row>

        </div>
    </React.Fragment>
  )
}
