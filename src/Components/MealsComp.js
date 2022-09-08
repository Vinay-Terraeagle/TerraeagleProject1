import React from 'react'
import '../Styles/app.css'
import Images from "../assets/images/h1.png"
import Img2 from "../assets/images/h2.png"

// carousels
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
// import WorkoutCompo from './WorkOutComponent/WorkoutCompo'

export default function MealsComp() {

    const MealSlider = {
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause:true,
        items:1,
        loop:true,
        // margin:50,
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
                items: 1.8,
            },
        }
        
    }

  return (
    <>
      <section>
        <div className='meals-card'>
          <div className='headpart'>
            <h1>Meals Toady.</h1>
          </div>
          <div className='cml-carm'>
            <div className='cml-cards'>
              <OwlCarousel {...MealSlider}>
                <div className='crd-row'>
                  <div className='cml-img'>
                    <img src={Images} className="crd-img" alt='/' />
                  </div>
                  <div className='txtrws'>
                    <h5>BreakFast</h5>
                    <p>Bread, Peanut butter, apple</p>
                  </div>
                  <div className='kols'>
                    <h4>12.47</h4>
                    <p>kcal</p>
                  </div>
                  <div className='carbs-wrp'>
                  <div className='carbs-col'>
                    <p>156G</p>
                    <h4>Carbs</h4>
                  </div>
                  <div className='carbs-col'>
                    <p>56G</p>
                    <h4>Fat</h4>
                  </div>
                  <div className='carbs-col'>
                  <p>16G</p>
                    <h4>Protein</h4>
                  </div>
                  </div>
                </div>
                <div className='crd-row'>
                  <div className='cml-img'>
                    <img src={Images} className="crd-img" alt='/' />
                  </div>
                  <div className='txtrws'>
                    <h5>BreakFast</h5>
                    <p>Bread, Peanut butter, apple</p>
                  </div>
                  <div className='kols'>
                    <h4>12.47</h4>
                    <p>kcal</p>
                  </div>
                  <div className='carbs-wrp'>
                  <div className='carbs-col'>
                    <p>156G</p>
                    <h4>Carbs</h4>
                  </div>
                  <div className='carbs-col'>
                    <p>56G</p>
                    <h4>Fat</h4>
                  </div>
                  <div className='carbs-col'>
                  <p>16G</p>
                    <h4>Protein</h4>
                  </div>
                  </div>
                </div>

                <div className='lnch-row'>
                  <div className='cml-img'>
                    <img src={Img2} className="crd-img" alt='/' />
                  </div>
                  <div className='txtrws'>
                    <h5>Lunch</h5>
                    <p>Salmon, Mixed Veggies, Avacado</p>
                  </div>
                  <div className='kols'>
                    <h4>12.47</h4>
                    <p>kcal</p>
                  </div>
                  <div className='carbs-wrp'>
                  <div className='carbs-col'>
                    <p>156G</p>
                    <h4>Carbs</h4>
                  </div>
                  <div className='carbs-col'>
                    <p>56G</p>
                    <h4>Fat</h4>
                  </div>
                  <div className='carbs-col'>
                  <p>16G</p>
                    <h4>Protein</h4>
                  </div>
                  </div>
                </div>
                <div className='lnch-row'>
                  <div className='cml-img'>
                    <img src={Img2} className="crd-img" alt='/' />
                  </div>
                  <div className='txtrws'>
                    <h5>Lunch</h5>
                    <p>Salmon, Mixed Veggies, Avacado</p>
                  </div>
                  <div className='kols'>
                    <h4>525</h4>
                    <p>kcal</p>
                  </div>
                  <div className='carbs-wrp'>
                  <div className='carbs-col'>
                    <p>156G</p>
                    <h4>Carbs</h4>
                  </div>
                  <div className='carbs-col'>
                    <p>56G</p>
                    <h4>Fat</h4>
                  </div>
                  <div className='carbs-col'>
                  <p>16G</p>
                    <h4>Protein</h4>
                  </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>

          {/* workout */}
          {/* <WorkoutCompo /> */}
        </div>
      </section>
    
    </>
  )
}
