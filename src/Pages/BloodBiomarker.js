import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import '../Styles/BloodBiomarker.css'
import {Container ,Card ,Row ,Col,} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import bodyimg from '../assets/images/bodyimg.png'
// images
import thy from '../assets/images/thy.png'
import hrt from '../assets/images/hrt.png'

export default function BloodBiomarker() {

  const percentage = 66;

  return (
    <React.Fragment>
      <Header/>
        <section className='h-20'>
            <Container>
              <Col>
              <div className='bldmrks-main'>
                <Row className="pt-5 mt-2">
                  <h1 style={{ fontSize: "2rem" }}>Blood BioMarker</h1>
                  <p></p>
                </Row>
                <Row className='bldmrks mt-5 h-100 rounded-2'>
                  <div className='usr-det d-flex justify-content-spbetween align-items-center'>
                  <div className='col-8 mr-2'>
                  <h1>Hi, Vinesh</h1>
                    <p>Congratulaations, We have Sucessfully Completed your health diagnosis. This ia a big steptowaeds staying on top of your health and identify potentine to improve!</p>
                    <h4>10 Vita Health Parameters of a Human body EcoSystem</h4>
                    <p>Below are the health Parameters which reqire routine checkups for primary helthcard. the view also includes personalised information depending on the tests you have taken.</p>
                  </div>
                    <div className='user-circle col-3'>
                    <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`}/> 
                    </div>
                  </div>
                  </div>
                  <div className='hlthscore dflex justify-content-center'>
                    <div className='hlth-items'>
                      <div className='hrt-sectn'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                      <div className='chous'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                      <div className='lever'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                      <div className='Vitamin'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                      <div className='HBA'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className='helt-imgbg'>
                      <img src={bodyimg} className="bdy-img"/>
                    </div>
                    {/* rightside */}
                    <div className='right-section'>
                    <div className='vita-d'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                    <div className='liver'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                    <div className='cal'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                    <div className='iron'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                    <div className='comp'>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid Function</h1>
                        <p>Thyroid Stimulating Hoemone</p>
                        <div className='inrtxt'>
                        <span>(TSH)-Ultrosensit: 5.546</span>
                        <p>ulU/ml</p>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
                </div>
              </Col>
            </Container>
        </section>


    </React.Fragment>
  )
}
