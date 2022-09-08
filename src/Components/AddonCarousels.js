import React from 'react'
import { useNavigate } from "react-router-dom";
import '../Styles/app.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'


export default function AddonCarousels() {

  const AddonC = {
    autoplay: true,
    autoplayTimeout: 4100,
    autoplayHoverPause:true,
    items:1,
    loop:false,
    margin: 30,
    
  }
  let navigateToSubscription = useNavigate()
  const handleUpgradeClick = () => {
    navigateToSubscription('/Subscriptionplan')
  }
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
                              <button className='btn-lrn' onClick={handleUpgradeClick}>Purchase</button>
                            </div>
                          </div>
                        </div>
                      </div>
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