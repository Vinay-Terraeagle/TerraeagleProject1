import React from 'react'
import '../Styles/app.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'


export default function HealthMatrix() {

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
                  <h4>34,05</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>

              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Body Fat Percentage</span>
                  <h4>-0.15</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>HIP to Waist</span>
                  <h4>N/A</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Life Expectancy</span>
                  <h4>N/A</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Inches Lost</span>
                  <h4>N/A</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Weight Lost</span>
                  <h4>N/A</h4>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
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