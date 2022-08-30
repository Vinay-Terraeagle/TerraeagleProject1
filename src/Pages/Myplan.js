import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../Components/footer'
import Header from '../Components/Header'
// images
import Mount from '../assets/images/Mount.png'
import Demb from '../assets/images/Demb.png'
import groce from '../assets/images/groce.png'
import goals from '../assets/images/goals.png'
import DietPlanComponent from '../Components/DietPlanComponent'
import GroceryListComponent from '../Components/GroceryListComponent'
import HabbitsComponent from '../Components/HabbitsComponent'
import ExcerciseComponent from '../Components/ExcerciseComponent'
import '../Styles/app.css'

export default function Myplan() {
  const [activeTab, setActive] = useState('dietPlan');

  let navigate = useNavigate(); 
    function useNavigateToBloodBiomarker(e) {
        e.preventDefault();
        let path = '/BloodBiomarker'; 
        navigate(path);
    } 

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
                <button className='btn-dash-1' onClick={useNavigateToBloodBiomarker}>Blood  BioMarker</button>
              </div>
            </div>
            {/* calender */}
            <div className='cals-col'>
              <div className='arw-btns'>
                <button className='lft-arw'>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className='arw-lf' viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
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
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
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
              <div className={activeTab==='dietPlan'?'activeTab calo-crd' : 'calo-crd'}  onClick={() => setActive("dietPlan")}>
                <div className='cl-icn'>
                  <img src={Demb} className="dembo" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>Diet Plan</h1>
                </div>
              </div>
              <div className={activeTab==='exercise'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("exercise")}>
                <div className='cl-icn'>
                <img src={Demb} className="dembo" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>Exercise</h1>
                </div>
              </div>
              <div className={activeTab==='habits'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("habits")}>
                <div className='cl-icn'>
                <img src={goals} className="goals" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>Habits</h1>
                </div>
              </div>
              <div className={activeTab==='groceryList'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("groceryList")}>
                <div className='cl-icn'>
                <img src={groce} className="groce" alt="/"/>
                </div>
                <div className='cl-txt'>
                  <h1>Grocery plan</h1>
                </div>
              </div>
              <div className={activeTab==='myProgress'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("myProgress")}>
                <div className='cl-icn'>
                  <img src={Mount} className="Mounimg" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>My Insight</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {activeTab === "dietPlan" && <DietPlanComponent/>}
    {activeTab === "groceryList" && <GroceryListComponent/>}
    {activeTab === "habits" && <HabbitsComponent />}
    {activeTab === "exercise" && <ExcerciseComponent />}

    

    

    <Footer/>

      
    </React.Fragment>
  )
}
