import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header'
import Footer from '../Components/footer'
import '../Styles/BloodBiomarker.css'
import {Container ,Card ,Row ,Col,} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import bodyimg from '../assets/images/bodyimg.png'
// images
import thy from '../assets/images/thy.png'
import L1 from '../assets/images/L1.png'
// import L2 from '../assets/images/L2.png'
// import L3 from '../assets/images/L3.jpg'
import L4 from '../assets/images/L4.jpg'
import L5 from '../assets/images/L5.jpg'
import L6 from '../assets/images/L6.jpg'
// import L7 from '../assets/images/L7.png'
import L8 from '../assets/images/L8.png'
import L9 from '../assets/images/L9.jpg'
// import L10 from '../assets/images/L10.png'
// import L11 from '../assets/images/L11.png'
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
                  
                  <p></p>
                </Row>
                <Row className='bldmrks mt-3 h-100 rounded-2'>
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
                      <div className='hrt-sectn blood-bio-info' onClick={renderBloodBioIndetail} >
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Rental Function</h1>
                        <p>Thyroid Stimulating Hormone</p>
                        <div className='inrtxt'>
                        <span className='tname'>(TSH)-Ultrosensit: 5.546 UlU / ml</span>
                        <p className='danger'>Concern</p>
                        </div>
                        </div>
                      </div>
                      <div className='chous blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L8} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Vitamin D</h1>
                        <div className='inrtxt'>
                        <span className='details'>38.03 mg/ml</span>
                        <p className='green'>Everything looks goods</p>
                        </div>
                        </div>
                      </div>
                      <div className='lever blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={thy} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Kideny</h1>
                        <p>Function</p>
                        <div className='inrtxt'>
                        <span>Creatinine : 0.81 mg/dl</span>
                        <p className='good'>Everything looks goods</p>
                        </div>
                        </div>
                      </div>
                      <div className='Vitamin blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L9} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Cholesterol</h1>
                        <p>Total</p>
                        <div className='inrtxt'>
                        <span>2.4.1 mg/dl</span>
                        <p className='denger'>Concern</p>
                        </div>
                        </div>
                      </div>
                      <div className='HBA blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L6} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>HbA1C</h1>
                        {/* <p>Thyroid Stimulating Hoemone</p> */}
                        <div className='inrtxt'>
                        <span>6.8 %</span>
                        {/* <p></p> */}
                        <p>Concern</p>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className='helt-imgbg'>
                      <img src={bodyimg} className="bdy-img"/>
                    </div>
                    {/* rightside */}
                    <div className='right-sect'>
                    <div className='Vitd blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L8} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Vitamin</h1>
                        {/* <p>200</p> */}
                        <div className='inrtxt'>
                        <span>200 Pg / Ml</span>
                        <p>Everything looks Goods</p>
                        </div>
                        </div>
                      </div>
                     <div className='liver blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L1} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Liver Function</h1>
                        <p>Alanina Aminotransforase</p>
                        <div className='inrtxt'>
                        <span>(ALT/SGPT): 5.2.3 U/I</span>
                        <p className='denger'>Concern</p>
                        </div>
                        </div>
                      </div> 
                     <div className='calo blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L4} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Calcium Total</h1>
                        {/* <p>Thyroid Stimulating Hoemone</p> */}
                        <div className='inrtxt'>
                        <span>9.3 mg / dl</span>
                        <p>Concern</p>
                        </div>
                        </div>
                      </div> 
                     <div className='iron blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={L5} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Iron Studies</h1>
                        <p>Serum iron: 82.6 </p>
                        <div className='inrtxt'>
                        <span>82.6 ug / dl</span>
                        <p className='good'>Everything looks goods</p>
                        </div>
                        </div>
                      </div> 
                    <div className='comp blood-bio-info' onClick={renderBloodBioIndetail}>
                        <div className='hrt-img'>
                          <img src={hrt} className="heart-icn" alt="/"/>
                        </div>
                        <div className='hrt-txt'>
                        <h1>Complete Hemogram</h1>
                        {/* <p>Hoemoglobin</p> */}
                        <div className='inrtxt'>
                        <span>Hoemoglobin: (HB) :14.2</span>
                        {/* <p>ulU/ml</p> */}
                        <p>Everything looks goods</p>
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
