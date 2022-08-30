import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'

export default function ThreadsDetailedView() {
  return (
    <React.Fragment>
        <Header/>
        <div className='container'>
            <h2 className="mt-4"> How do millet affect your metabolism? </h2>
            <div className='threads-container w-100'>
                <div className="row justify-content-around threads-detailed-view-container">
                    <div className="col-10 mt-4">
                        <div className='row mb-4'>
                            <div class="col-12 d-flex justify-content-end">
                                <button class="btn rounded-pill btn-sm btn-green mr-2">
                                    <span class="text-white fw-bold">Subscribe</span>
                                </button> 
                                <button class="btn rounded-pill btn-sm btn-blue mr-2"><span class="fw-bold text-white">Unlocked</span></button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-header p-3">

                                <div className='row align-items-center'>
                                    <div  class="col-6 d-flex align-items-center">
                                        <div class="d-flex flex-column">
                                            <a href="/profiles/sanjana" class="mr-2 fs-22 text-white">Sanjana</a> 
                                            <small  class="mr-2 text-capitalize fw-bold text-white">said 2 days ago...</small>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <button type="submit" class="btn btn-sm bg-white rounded-pill">
                                                <span class="">0</span> 
                                                <span class="fa fa-heart"></span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="card-body p-5">
                                <div>
                                    Phosphorus, iron, calcium, zinc, and potassium are essential elements needed for the body to operate properly and are abundant in millets. Eating a balanced diet makes you energized naturally and motivate you to burn fat.
                                </div>
                                <div>
                                    Magnesium is abundant in millet, which helps to prevent cardiac disorders. Additionally, it is essential for controlling blood pressure and avoiding heart attacks. Since there are so many antioxidants present, it also helps the body get rid of free radicals and manage oxidative stress. Millets are advised for diabetics as well because they are low in calories and can be useful in lowering high blood sugar levels. Therefore, it can be inferred that consuming this extremely nutritious food regularly can raise your health quotient.
                                </div>
                            </div>
                            <div className="card-footer p-4">
                                <div class="">
                                     This thread was published 2 days ago by sanjana and currently has <span>1 reply</span>
                                </div>
                            </div>
                        </div>

                        <div className="card mt-5">
                            <div className="card-header text-white">
                                NEED TO ADD THE EDITOR 

                            </div>
                            <div className="card-body"> Do you have anything to say ? </div>
                            <div className="card-footer pt-3 pb-3">
                                <button className='btn rounded-pill btn-blue text-white'>
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>

  )
}
