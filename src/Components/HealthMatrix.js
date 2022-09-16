import React, { useState, useEffect } from 'react'
import '../Styles/app.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import bmiCal from '../assets/images/BMIMeter.png'
import blood from '../assets/images/Blood.png'
import Heart from '../assets/images/Heart.png'
import bodysv from '../assets/images/Body.png'
import bodyfat from '../assets/images/body-fat.png'
import dailytasks from '../assets/images/daily-tasks.png'
import slim from '../assets/images/slim.png'
import Bmi2 from '../assets/images/Bmi2.png'

export default function HealthMatrix(healthMatrixDetails) {

  const HealthSlider = {
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    items:3,
    loop:true,
    margin:10,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items:1,
        },
        768:{
            items: 2,
        },
        1000: {
            items: 3,
        },
    }   
}

const [bmi, setbmi] = useState();
const [body_fat_percentage, setbodyfat] = useState();
const [hip_to_waist, sethip_to_waist] = useState();
const [metobolic_age, setmetabolic_age] = useState();
const [blood_age, setblood_age] = useState();
const [wis_score, setwis_score] = useState();
const [healthscore, sethealth_age] = useState()
const [weightlost, setweight_lost] = useState()

useEffect(() => {
if (healthMatrixDetails !== undefined && healthMatrixDetails.healthMatrixData !== undefined) {
    const healthMatrixData = healthMatrixDetails.healthMatrixData
    setbmi(healthMatrixData.bmi);
    setbodyfat(healthMatrixData.body_fat_percentage);
    sethip_to_waist(healthMatrixData.hip_to_waist);
    setmetabolic_age(healthMatrixData.metobolic_age);
    setblood_age(healthMatrixData.blood_age);
    setwis_score(healthMatrixData.health_score);
    setweight_lost(healthMatrixData.weight_lost);
}
},[healthMatrixDetails.healthMatrixData])

  return (
    <>
    {/* boxsections cards */}
    <section className='card-section'>
          <div className='container'>
            <div className='details'>
                <h1>Health Metrics </h1>
            </div>
            <div className='main-card-row'>
              <div className='card-wrapper'>
              <OwlCarousel {...HealthSlider}>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>BMI</span>
                  <h4>{bmi}</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <img src={bmiCal} className="healthicons" alt="/"/>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Body Fat</span>
                  <h4>{body_fat_percentage}</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <img src={bodyfat} className="healthicons" style={{width:'20px'}} alt="/"/>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Metabolic age</span>
                  <h4>{metobolic_age}</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                <img src={Heart} className="healthicons" alt="/"/>
                </div>
              </div>

              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Blood Age</span>
                  <h4>{blood_age} N/A</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                <img src={blood} className="healthicons" alt="/"/>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>HIP to Waist</span>
                  <h4>{hip_to_waist}</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                <img src={bmiCal} className="healthicons" alt="/"/>
                </div>
              </div>
              
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Inches Lost</span>
                  <h4>N/A</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                <img src={Bmi2} className="healthicons" alt="/"/>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Weight Lost</span>
                  <h4>{weightlost}</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                <img src={slim} className="healthicons" alt="/"/>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Life Expectancy</span>
                  <h5>N/A</h5>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                <img src={dailytasks} className="healthicons" alt="/"/>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Health Score</span>
                  <h5>{healthscore}</h5>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                <img src={bodysv} className="healthicons" alt="/"/>
                </div>
              </div>
              
              </OwlCarousel>  
             </div>
           </div>
          </div>
        </section>

</>
  )
}