import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/Header'
// images
import Mount from '../assets/images/Mount.png'
import Demb from '../assets/images/Demb.png'
import groce from '../assets/images/groce.png'
import goals from '../assets/images/goals.png'
import crdmg from '../assets/images/h5.jpg'

import '../Styles/app.css'

export default function Myplan() {
  return (
    <React.Fragment>
      <Header/>
      <section className='myplan'>
        <div className='container'>
          <div></div>
          <div className='plan-col'>
            <div className='plan-txtrow'>
              <div className='plans-txts'>
                <h1>My Plan</h1>
              </div>
              <div className='plan-btn'>
                <button className='plnbtn'>Blood  BioMarker</button>
              </div>
            </div>
            {/* calender */}
            <div className='cals-col'>
              <div className='arw-btns'>
                <button className='lft-arw'>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='arw-lf' viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
                </button>
              </div>
              <div className='cals-row'>
                  <div className='cal'>
                    <a href='/' className='cals-act'>
                      <h1>1</h1>
                      <span className='cals-act'>Mon</span>
                      </a>
                  </div>
                  <div className='cal'>
                  <a href='/'>
                      <h1>2</h1>
                      <span>Tue</span>
                    </a>
                  </div>
                  <div className='cal'>
                  <a href='/'>
                      <h1>3</h1>
                      <span>Wed</span>
                    </a>
                  </div>
                  <div className='cal'>
                  <a href='/'>
                      <h1>4</h1>
                      <span>Thu</span>
                      </a>
                  </div>
                  <div className='cal'>
                  <a href='/'>
                      <h1>6</h1>
                      <span>Fri</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>7</h1>
                      <span>Sat</span>
                    </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>8</h1>
                      <span>Sun</span>
                    </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>9</h1>
                      <span>Mon</span>
                    </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>10</h1>
                      <span>Tue</span>
                    </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>11</h1>
                      <span>Wed</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>12</h1>
                      <span>Thu</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>13</h1>
                      <span>Fri</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>14</h1>
                      <span>Sat</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>15</h1>
                      <span>Sun</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>16</h1>
                      <span>Mon</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>17</h1>
                      <span>Tue</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>18</h1>
                      <span>Web</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>19</h1>
                      <span>Sat</span>
                      </a>
                  </div>
                  <div className='cal'>
                    <a href='/'>
                      <h1>20</h1>
                      <span>Sun</span>
                      </a>
                  </div>
              </div>
              <div className='arw-btns'>
                <button className='rght-arw'>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='arw-rght' viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section>
      <div className='container'>
        <div className='main-col'>
          <div className='cal-box'>
            <div className='tdy-dte'>
                <div className='tdy-col'>
                  <h1>01</h1>
                    <span>August</span>
                    <p>2022</p>
                </div>
            </div>
          </div>
          <div className='cal-meal-bx'>
            <div className='calo-crd'>
              <a href='/'>
              <div className='cl-icn'>
                <img src={Demb} className="dembo" alt='/'/>
              </div>
              <div className='cl-txt'>
                <h1>Diet Plan</h1>
              </div>
              </a>
            </div>
            <div className='calo-crd'>
              <a href='/'>
              <div className='cl-icn'>
              <img src={Demb} className="dembo" alt='/'/>
              </div>
              <div className='cl-txt'>
                <h1>Exercise</h1>
              </div>
              </a>
            </div>
            <div className='calo-crd'>
              <a href='/'>
              <div className='cl-icn'>
              <img src={goals} className="goals" alt='/'/>
              </div>
              <div className='cl-txt'>
                <h1>Goal Plan (Habits)</h1>
              </div>
              </a>
            </div>
            <div className='calo-crd'>
              <a href='/'>
              <div className='cl-icn'>
              <img src={groce} className="groce" alt='/'/>
              </div>
              <div className='cl-txt'>
                <h1>Grocery plan</h1>
              </div>
              </a>
            </div>
            <div className='calo-crd'>
              <a href='/'>
              <div className='cl-icn'>
                <img src={Mount} className="Mounimg"/>
              </div>
              <div className='cl-txt'>
                <h1>Challenges</h1>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* Lunch */}
    <section>
      <div className='container'>
        <div className='tdy-ln-mn'>
          <div className='lch-bx'>
              <div className='ln-txb'>
                <div className='ln-hed'>
                  <h2>Lunch</h2>
                  <p>Today, 01 August, 2022</p>  
                </div>
                <div>
                  <div  className='ln-clb'>
                    <div className='ln-crb'>
                      <h1>156 G</h1>
                      <p>Carbs</p>
                    </div>
                    <div className='ln-prot'>
                      <h1>32 G</h1>
                      <p>Protien</p>
                    </div>
                    <div className='ln-ft'>
                      <h1>32 G</h1>
                      <p>Fat</p>
                    </div>
                  </div>
                  <div className='kcl'>
                    <h1>540 Kcal</h1>
                  </div>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </section>

    {/* dietplan */}
    <section>
      <div className='container'>
        <div className='detils-mn-col'>
          <div className='det-txt'>
            {/* <h1>Diet Plan</h1> */}
          </div>
          <div className='diet-cl'>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                 <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>View More</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                 <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>ViewMore</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>ViewMore</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                 <h4>Salmoon</h4>
                  <p>Toasted + 100g</p>
                </div>
                <div className='ttl-grm'>
                  <h5>Calories </h5>
                  <span>140 Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>ViewMore</button>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Dnner */}
    <section>
      <div className='container'>
        <div className='tdy-ln-mn'>
          <div className='dnr-bx'>
              <div className='dn-txb'>
                <div className='dn-hed'>
                  <h1>Todays Meals</h1>  
                </div>
                <div>
                  <div  className='dn-clb'>
                    <div className='dn-crb'>
                      <h1>156 G</h1>
                      <p>Carbs</p>
                    </div>
                    <div className='dn-prot'>
                      <h1>32 G</h1>
                      <p>Protien</p>
                    </div>
                    <div className='dn-ft'>
                      <h1>32 G</h1>
                      <p>Protiens</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='brk-fst-mn'>
          <div className='brk-txt'>
            <h2>Breakfast</h2>
          </div>
            {/* <div className='brk-col'>
                <div></div>
            </div> */}
            <div className='brk-cl'>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>Breakfast</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>450 </h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>View More</button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>lunch</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>540</h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                  </button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>Dinner</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>450 </h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
                  </button>
                </div>
            </div>
            <div className='dt-rw'>
            <img src={crdmg} className="crdmg" alt='/'/>
            <div className='dt-txt'>
                <h3>Snacks</h3>
                  {/* <p>Toasted + 100g</p> */}
                </div>
                <div className='ttl-grm'>
                  <h1>540 </h1>
                  <span>Kcal</span>
                </div>
                <div className='dbtn'>
                  <button className='viw-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* <Footer/> */}

      
    </React.Fragment>
  )
}
