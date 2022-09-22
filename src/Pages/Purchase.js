import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import '../Styles/Subscription.css'
import { Check } from 'react-bootstrap-icons'
import { X } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

export default function Purchase(planDetails) {

  let navigateToPayment = useNavigate()
  const handlePaymentClick = () => {
    navigateToPayment('/Payment')
  }

  console.log(planDetails)
  const[purcheseData, setpurcheseData] = useState();
  
  useEffect(() => {
    if(planDetails.purcheseplans !== undefined) {
      if(planDetails.purcheseplans.length > 0) {
        const purcheseplanlist = planDetails.purcheseplans.map((item,i) =>
        <div className='plncrd col-4 mt-4'>
        <div className='plns d-flex justify-content-between align-items-center'>
        <div className='viewmore'>
              <button className='more'>₹<b>{item.price}</b><span>/Month</span></button>
          </div>
        </div>
        <div className='plantitle'>
          <h4>{item.name}</h4>
          <span>{item.description}</span>
        </div>
        <div className='plandet '>
          <div className='strtdte mt-2 mb-2 d-flex justify-content-between'>
            <p>8 Excercise Plan</p>
            <div>
                <Check color='#00FF00' className='chck'/>
            </div>
          </div>
          <div className='expin d-flex justify-content-between'>
            <p>Weekly Nutrition Plan</p>
            <div>
              <Check color='#00FF00' className='chck'/>
            </div>
          </div>
          <div className='expin d-flex justify-content-between'>
            <p>Weekly Dietitian Support</p>
            <div>
              <Check color='#00FF00' className='chck'/>
            </div>
          </div>
          <div className='expin d-flex justify-content-between'>
            <p>Weekly Exercise List</p>
            <div>
              <Check color='#00FF00' className='chck'/>
            </div>
          </div>
          <div className='expin d-flex justify-content-between'>
            <p>Recipes</p>
            <div>
              <Check color='#00FF00' className='chck'/>
            </div>
          </div>
          <div className='enddte mt-2 mb-2  d-flex justify-content-between'>
            <p>Mental Wellness</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte mt-2 mb-2 d-flex justify-content-between'>
            <p>1:1 TRaining Session </p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte d-flex justify-content-between'>
            <p>Precision Nutrition</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte d-flex justify-content-between'>
            <p>Full Body Blood Test</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte d-flex justify-content-between'>
            <p>Precision Nutrition</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte d-flex justify-content-between'>
            <p>Blood Biomarker Analysis</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte d-flex justify-content-between'>
            <p>24x7 Dietitian Support</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte d-flex justify-content-between'>
            <p>Daily Checkin</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
          <div className='enddte d-flex justify-content-between'>
            <p>Doctor Consultation</p>
            <div>
              <X color='#ff0000' className="dnger"/>
            </div>
          </div>
        </div>
        <button className='bynw' onClick={handlePaymentClick} >Buy Now</button>
      </div>
        )
        setpurcheseData(purcheseplanlist)
      }
    }

  },[planDetails.purcheseplans]);


  return (
    <React.Fragment>
        <Container>
            <Row>
               
                {/* myplan */}
                <div className='mpln row mt-5'>
                  {purcheseData}
                </div>
            </Row>
        </Container>
    </React.Fragment>
  )
}
