import React from 'react'
// import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header'
import Footer from '../Components/footer'
import '../Styles/BloodBiomarker.css'
import {Container ,Row ,Col,} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import bodyimg from '../assets/images/bodyimg.png'
// images
import thy from '../assets/images/thy.png'
import L1 from '../assets/images/L1.png'
import L4 from '../assets/images/L4.jpg'
import L5 from '../assets/images/L5.jpg'
import L6 from '../assets/images/L6.jpg'
import L8 from '../assets/images/L8.png'
import L9 from '../assets/images/L9.jpg'
import hrt from '../assets/images/hrt.png'

export default function BloodBiomarker() {

  const percentage = 66;

  let navigate = useNavigate(); 
    function renderBloodBioIndetail(e) {
        e.preventDefault();
        let path = '/Biodetails'; 
        navigate(path);
    } 



  return (
    <React.Fragment>
      <Header/>
        <section>
            <Container>
              <Col>
                <Row className="mt-5">
                  <h2>Blood BioMarker</h2>
                </Row>
                <Row className='bldmrks mt-3 h-100 rounded-2'>
                  <div className='usr-det d-flex justify-content-spbetween align-items-center'>
                  <div className='col-8 mr-2'>
                  <h1>Hi, Vinesh</h1>
                    <p>Congratulations, We have successfully completed your health diagnosis. This is a big step towards staying on top of your health and identify potential to improve!</p>
                    <h4>10 Vital Health Parameters of a Human Body Ecosystem 8 5</h4>
                    <p>Below are the health parameters which require routine checkups Out of 100 for primary healthcare. The view also includes personalised infor-mation depending on the tests you have taken.</p>
                  </div>
                    <div className='user-circle col-3'>
                    <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={percentage} text={`${percentage}%`}/> 
                    </div>
                  </div>
                  </div>
                  <div className='hlthscore dflex justify-content-center mb-5'>
                    <div className='hlth-items'>
                      <div className='hrt-sectn blood-bio-info' onClick={renderBloodBioIndetail} >
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Blood</h1>
                        <p>5%</p>
                        <div className='inrtxt'>
                        <span className='tname'>Normal Range</span>
                        </div>
                        </div>
                      </div>
                      <div className='chous blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L8} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Protiens</h1>
                        <p>0%</p>
                        <div className='inrtxt'>
                          <span className='details'>Normal Range</span>
                        </div>
                        </div>
                      </div>
                      <div className='lever blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={thy} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Metabolic</h1>
                        <p>0%</p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div>
                      <div className='Vitamin blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L9} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Renal</h1>
                        <p>0%</p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div>
                      <div className='HBA blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L6} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Hormones</h1>
                        <p>0%</p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className='helt-imgbg'>
                      <img src={bodyimg} className="bdy-img" alt="/"/>
                    </div>
                    {/* rightside */}
                    <div className='right-sect'>
                    <div className='Vitd blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L8} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Vit & Minerals</h1>
                        <p>0%</p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div>
                     <div className='liver blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L1} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Liver </h1>
                        <p>0%</p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div> 
                     <div className='calo blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L4} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Iron</h1>
                        <p>0%</p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div> 
                     <div className='iron blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L5} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Lipid</h1>
                        <p>0% </p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div> 
                    <div className='comp blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Thyroid</h1>
                        <p>Not Active</p>
                        <div className='inrtxt'>
                        <span>Normal Range</span>
                        </div>
                        </div>
                      </div>
                   
                    </div>
                  </div>
                </Row>
              </Col>
            </Container>
        </section>
      <Footer />

    </React.Fragment>
  )
}
