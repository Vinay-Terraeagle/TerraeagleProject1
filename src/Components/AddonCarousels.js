import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '../Styles/app.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { useState } from 'react';
// import Trainer from '../../assets/images'


export default function AddonCarousels(subscriptionLists) {

  const [purchaseinfo, setpurchaseinfo] = useState();
  
  const AddonC = {
    autoplay: true,
    autoplayTimeout: 4100,
    autoplayHoverPause:true,
    items:1,
    loop:false,
    margin: 30
  }

  let navigateToSubscription = useNavigate()
  const handleUpgradeClick = () => {
    navigateToSubscription('/BloodBiomarker')
  }
  useEffect(() => {
    const subscriptioninfo = JSON.parse(localStorage.getItem('subscriptionBasedVisibility'))
    if(subscriptioninfo.biomarkers === "biomarkers") {
      const link = <button className='gbtn-gt' onClick={handleUpgradeClick}>View Details</button>
      setpurchaseinfo(link)
    } else {
      const purchaseBtn = <button className='btn-lrn'  onClick={handleUpgradeClick}>Purchase</button>
      setpurchaseinfo(purchaseBtn)
    }
  },[])


  JSON.parse(localStorage.getItem('subscriptionBasedVisibility'))
  // console.log(JSON.parse(localStorage.getItem('subscriptionBasedVisibility')))
  
  return (
    <React.Fragment>
            <div className='main-carousels'>
            <OwlCarousel {...AddonC}>
                <div className='addon-plan'>
                    <div className='addon-txt'>
                        <div className='addponplan'>
                        <span>Started at ₹540</span>
                    </div>
                        <div className='addon-txtbx'>
                          <h1>Blood biomarkers</h1>
                          <p>Talk to us for instant Support</p>
                          </div>
                          <div className='bio-buttons'>
                            {/* <div  className="btn-purch">
                              <button className='gbtn-gt'>Learn More</button>
                            </div> */}
                            <div className='btn-purch'>
                              {purchaseinfo}
                              {/* <button className='btn-lrn'  onClick={handleUpgradeClick}>Purchase</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                <div className='addon-plan'>
                    <div className='addon-txt'>
                        <div className='addponplan'>
                        <span>Started at ₹ 5000</span>
                    </div>
                        <div className='addon-txtbx'>
                          <h1>Book Trainer</h1>
                          <p>Talk to us for instant Support</p>
                          </div>
                          <div className='bio-buttons'>
                            {/* <div  className="btn-purch">
                              <button className='gbtn-gt'>Learn More</button>
                            </div> */}
                            <div className='btn-purch'>
                              <button className='btn-lrn' onClick={handleUpgradeClick} >Purchase</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      </OwlCarousel>
                </div>
    </React.Fragment>
  )
}