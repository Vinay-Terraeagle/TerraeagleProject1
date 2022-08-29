import React from 'react'
import '../Styles/app.css'
import Images from "../assets/images/h1.png"
import Img2 from "../assets/images/h2.png"
// images
import Yoga1 from "../assets/images/y6.jpg"
import Yoga2 from "../assets/images/y7.jpg"
import Yoga3 from "../assets/images/y8.jpg"
import Yoga4 from "../assets/images/y9.jpg"
import Yoga5 from "../assets/images/y10.jpg"
import Yoga6 from "../assets/images/y11.png"
// carousels
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function MealsComp() {

    const MealSlider = {
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
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
                                <img src={Images} className="crd-img" alt='/'/>
                              </div>
                              <div className='txtrws'>
                              <h5>BreakFast</h5>
                              <p>Bread, Peanut butter, apple</p>
                              </div>
                              <div className='kols'>
                                <h4>12.47</h4>
                                <p>kcal</p>
                              </div>
                              <div className='carbs-col'>
                                <h4>Carbs</h4>
                                <p>12g Left</p>
                              </div>
                              <div></div>
                              <div></div>
                            </div>
                            <div className='crd-row'>
                              <div className='cml-img'>
                                <img src={Images} className="crd-img" alt='/'/>
                              </div>
                              <div className='txtrws'>
                              <h5>BreakFast</h5>
                              <p>Bread, Peanut butter, apple</p>
                              </div>
                              <div className='kols'>
                                <h4>12.47</h4>
                                <p>kcal</p>
                              </div>
                              <div className='carbs-col'>
                                <h4>Carbs</h4>
                                <p>12g Left</p>
                              </div>
                              <div></div>
                              <div></div>
                            </div>

                            <div className='lnch-row'>
                              <div className='cml-img'>
                                <img src={Img2} className="crd-img" alt='/'/>
                              </div>
                              <div className='txtrws'>
                              <h5>Lunch</h5>
                              <p>Salmon, Mixed Veggies, Avacado</p>
                              </div>
                              <div className='kols'>
                                <h4>12.47</h4>
                                <p>kcal</p>
                              </div>
                              <div className='carbs-col'>
                                <h4>Carbs</h4>
                                <p>12g Left</p>
                              </div>
                              <div></div>
                              <div></div>
                            </div>
                            <div className='lnch-row'>
                              <div className='cml-img'>
                                <img src={Img2} className="crd-img" alt='/'/>
                              </div>
                              <div className='txtrws'>
                              <h5>Lunch</h5>
                              <p>Salmon, Mixed Veggies, Avacado</p>
                              </div>
                              <div className='kols'>
                                <h4>525</h4>
                                <p>kcal</p>
                              </div>
                              <div className='carbs-col'>
                                <h4>Carbs</h4>
                                <p>12g Left</p>
                              </div>
                              <div></div>
                              <div></div>
                            </div>
                            </OwlCarousel>
                            </div>
                          </div>






                          {/* workout section*/}
                          <div className='workout-plans'>
                              <div className='wrk-txt'>
                                <h1>WorkOut</h1>
                              </div>
                              <div className='wrk-col'>
                                <div className='wrk-row'>
                                  <div className='wrk-imgs'>
                                  <img src={Yoga1} className="yoga1" alt='/'/>
                                  </div>
                                  <div className='wrk-title'>
                                    <div className='wrk-ttl'>
                                      <h1>Strength Training</h1>
                                      <div className='srts'>
                                      <span>3Sets </span>
                                      <span className='rsts'> 15 Sec Rest </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='goto-arrw'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className='wrk-row'>
                                  <div className='wrk-imgs'>
                                  <img src={Yoga2} className="yoga1" alt='/'/>
                                  </div>
                                  <div className='wrk-title'>
                                    <div className='wrk-ttl'>
                                      <h1>High Intensity</h1>
                                      <div className='srts'>
                                      <span>3Sets </span>
                                      <span className='rsts'> 15 Sec Rest  </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='goto-arrw'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className='wrk-row'>
                                  <div className='wrk-imgs'>
                                  <img src={Yoga3} className="yoga1" alt='/'/>
                                  </div>
                                  <div className='wrk-title'>
                                    <div className='wrk-ttl'>
                                      <h1>Plyometric</h1>
                                      <div className='srts'>
                                      <span>3Sets </span>
                                      <span className='rsts'>15 Sec Rest  </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='goto-arrw'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className='wrk-row'>
                                  <div className='wrk-imgs'>
                                  <img src={Yoga4} className="yoga1" alt='/'/>
                                  </div>
                                  <div className='wrk-title'>
                                    <div className='wrk-ttl'>
                                      <h1>Strength Training</h1>
                                      <div className='srts'>
                                      <span>3Sets </span>
                                      <span className='rsts'> 15 Sec Rest </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='goto-arrw'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className='wrk-row'>
                                  <div className='wrk-imgs'>
                                  <img src={Yoga5} className="yoga1" alt='/'/>
                                  </div>
                                  <div className='wrk-title'>
                                    <div className='wrk-ttl'>
                                      <h1>Strength Training</h1>
                                      <div className='srts'>
                                      <span>3Sets </span>
                                      <span className='rsts'> 15 Sec Rest  </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='goto-arrw'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className='wrk-row'>
                                  <div className='wrk-imgs'>
                                  <img src={Yoga6} className="yoga1" alt='/'/>
                                  </div>
                                  <div className='wrk-title'>
                                    <div className='wrk-ttl'>
                                      <h1>Strength Training</h1>
                                      <div className='srts'>
                                      <span>3Sets </span>
                                      <span className='rsts'> 15 Sec Rest  </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='goto-arrw'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fc5b4d" className="gt-arw" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
    </div>
    </section>
    
    </>
  )
}
